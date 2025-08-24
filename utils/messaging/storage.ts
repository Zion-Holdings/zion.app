import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import {
  Conversation,
  ConversationContext,
  InboxItem,
  Message,
  NewMessageInput,
  UserSummary,
} from './types';

const DATA_DIR = path.join(process.cwd(), 'data', 'messaging');
const CONVERSATIONS_FILE = path.join(DATA_DIR, 'conversations.json');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads');

function ensureFiles() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(CONVERSATIONS_FILE)) fs.writeFileSync(CONVERSATIONS_FILE, '[]', 'utf8');
  if (!fs.existsSync(MESSAGES_FILE)) fs.writeFileSync(MESSAGES_FILE, '[]', 'utf8');
  if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, '[]', 'utf8');
  if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

function readJson<T>(filePath: string): T {
  ensureFiles();
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as T;
}

function writeJson<T>(filePath: string, data: T): void {
  ensureFiles();
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

export function getUserById(userId: string): UserSummary | undefined {
  const users = readJson<UserSummary[]>(USERS_FILE);
  return users.find((u) => u.id === userId);
}

export function listUsers(): UserSummary[] {
  return readJson<UserSummary[]>(USERS_FILE);
}

export function listConversations(userId: string): InboxItem[] {
  const conversations = readJson<Conversation[]>(CONVERSATIONS_FILE);
  const messages = readJson<Message[]>(MESSAGES_FILE);
  const users = readJson<UserSummary[]>(USERS_FILE);

  const items: InboxItem[] = conversations
    .filter((c) => c.participants.includes(userId))
    .map((c) => {
      const convMessages = messages
        .filter((m) => m.conversationId === c.id)
        .sort((a, b) => a.createdAt.localeCompare(b.createdAt));
      const lastMessage = convMessages[convMessages.length - 1];
      const otherId = c.participants.find((p) => p !== userId) as string;
      const other = users.find((u) => u.id === otherId) || {
        id: otherId,
        name: 'User',
        role: 'client' as const,
      };
      const unreadCount = convMessages.filter(
        (m) => m.recipientId === userId && m.status !== 'read'
      ).length;
      return {
        conversation: c,
        otherParticipant: other,
        lastMessage,
        unreadCount,
      };
    })
    .sort((a, b) => (b.conversation.lastMessageAt || '').localeCompare(a.conversation.lastMessageAt || ''));

  return items;
}

export function getConversationById(conversationId: string): Conversation | undefined {
  const conversations = readJson<Conversation[]>(CONVERSATIONS_FILE);
  return conversations.find((c) => c.id === conversationId);
}

export function getMessages(conversationId: string): Message[] {
  const messages = readJson<Message[]>(MESSAGES_FILE);
  return messages
    .filter((m) => m.conversationId === conversationId)
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt));
}

export function markAsRead(conversationId: string, userId: string): void {
  const conversations = readJson<Conversation[]>(CONVERSATIONS_FILE);
  const messages = readJson<Message[]>(MESSAGES_FILE);
  const now = new Date().toISOString();

  // Update message statuses
  let changed = false;
  for (const m of messages) {
    if (m.conversationId === conversationId && m.recipientId === userId && m.status !== 'read') {
      m.status = 'read';
      changed = true;
    }
  }
  if (changed) writeJson(MESSAGES_FILE, messages);

  // Update conversation unreadBy
  const conv = conversations.find((c) => c.id === conversationId);
  if (conv) {
    conv.unreadBy = conv.unreadBy.filter((id) => id !== userId);
    conv.lastMessageAt = now; // keep order fresh
    writeJson(CONVERSATIONS_FILE, conversations);
  }
}

function saveAttachmentIfProvided(base64?: string, name?: string): string | undefined {
  if (!base64) return undefined;
  ensureFiles();
  try {
    const matches = base64.match(/^data:(.*?);base64,(.*)$/);
    const buffer = Buffer.from(matches ? matches[2] : base64, 'base64');
    const ext = name?.split('.').pop() || 'bin';
    const filename = `${uuidv4()}.${ext}`;
    const filepath = path.join(UPLOADS_DIR, filename);
    fs.writeFileSync(filepath, buffer);
    return `/uploads/${filename}`;
  } catch (e) {
    return undefined;
  }
}

export function createOrGetConversation(
  senderId: string,
  recipientId: string,
  context?: ConversationContext
): Conversation {
  const conversations = readJson<Conversation[]>(CONVERSATIONS_FILE);
  const existing = conversations.find(
    (c) => c.participants.includes(senderId) && c.participants.includes(recipientId) && JSON.stringify(c.context || {}) === JSON.stringify(context || {})
  );
  if (existing) return existing;

  const conv: Conversation = {
    id: uuidv4(),
    participants: [senderId, recipientId],
    context,
    lastMessageAt: new Date().toISOString(),
    unreadBy: [recipientId],
  };
  conversations.push(conv);
  writeJson(CONVERSATIONS_FILE, conversations);
  return conv;
}

export function sendMessage(input: NewMessageInput): { conversation: Conversation; message: Message } {
  const conversations = readJson<Conversation[]>(CONVERSATIONS_FILE);
  const messages = readJson<Message[]>(MESSAGES_FILE);

  let conversation: Conversation | undefined;
  if (input.conversationId) {
    conversation = conversations.find((c) => c.id === input.conversationId);
  }
  if (!conversation) {
    conversation = createOrGetConversation(input.senderId, input.recipientId, input.context);
  }

  const attachmentUrl = saveAttachmentIfProvided(input.attachmentBase64, input.attachmentName);

  const message: Message = {
    id: uuidv4(),
    conversationId: conversation.id,
    senderId: input.senderId,
    recipientId: input.recipientId,
    body: input.body,
    linkUrl: input.linkUrl,
    attachmentUrl,
    createdAt: new Date().toISOString(),
    status: 'sent',
  };
  messages.push(message);
  writeJson(MESSAGES_FILE, messages);

  conversation.lastMessageAt = message.createdAt;
  if (!conversation.unreadBy.includes(input.recipientId)) {
    conversation.unreadBy.push(input.recipientId);
  }
  writeJson(CONVERSATIONS_FILE, conversations);

  return { conversation, message };
}