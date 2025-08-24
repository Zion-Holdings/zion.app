import fs from 'fs-extra';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import type {
  CommunityDb,
  ForumCategory,
  ForumThread,
  ForumReply,
  UserProfile,
  VoteDirection,
  ThreadFilters,
  Report,
  BadgeId,
} from '../community/types';

const DATA_DIR = path.join(process.cwd(), 'data', 'community');
const DB_PATH = path.join(DATA_DIR, 'db.json');

function ensureDb(): CommunityDb {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirpSync(DATA_DIR);
  if (!fs.existsSync(DB_PATH)) {
    const initial: CommunityDb = {
      categories: [
        { id: 'getting-hired', slug: 'getting-hired', name: 'Getting Hired', description: 'Tips and Q&A for landing gigs' },
        { id: 'project-help', slug: 'project-help', name: 'Project Help', description: 'Stuck? Ask the community' },
        { id: 'ai-tools', slug: 'ai-tools', name: 'AI Tools Discussion', description: 'Share and compare AI tools' },
        { id: 'feedback', slug: 'feedback', name: 'Feedback & Feature Requests', description: 'Help us improve' },
        { id: 'announcements', slug: 'announcements', name: 'Announcements', description: 'Official updates', isAdminOnly: true },
      ],
      threads: [],
      replies: [],
      users: [],
      reports: [],
    };
    fs.writeJSONSync(DB_PATH, initial, { spaces: 2 });
  }
  return fs.readJSONSync(DB_PATH) as CommunityDb;
}

function saveDb(db: CommunityDb) {
  fs.writeJSONSync(DB_PATH, db, { spaces: 2 });
}

export function listCategories(): ForumCategory[] {
  return ensureDb().categories;
}

export function getUser(userId: string): UserProfile | undefined {
  const db = ensureDb();
  return db.users.find((u) => u.id === userId);
}

export function upsertUser(profile: UserProfile): UserProfile {
  const db = ensureDb();
  const idx = db.users.findIndex((u) => u.id === profile.id);
  if (idx >= 0) db.users[idx] = profile; else db.users.push(profile);
  saveDb(db);
  return profile;
}

export function computeReputation(userId: string): number {
  const db = ensureDb();
  const userThreads = db.threads.filter((t) => t.authorId === userId);
  const userReplies = db.replies.filter((r) => r.authorId === userId);
  const upvotes = userThreads.reduce((acc, t) => acc + Math.max(0, t.votes), 0) + userReplies.reduce((acc, r) => acc + Math.max(0, r.votes), 0);
  const downvotes = userThreads.reduce((acc, t) => acc + Math.abs(Math.min(0, t.votes)), 0) + userReplies.reduce((acc, r) => acc + Math.abs(Math.min(0, r.votes)), 0);
  const answers = userThreads.filter((t) => t.isAnswered).length;
  return upvotes * 5 - downvotes * 2 + answers * 15;
}

export function awardBadges(userId: string): BadgeId[] {
  const db = ensureDb();
  const profile = db.users.find((u) => u.id === userId);
  if (!profile) return [];
  const badges = new Set(profile.badges);
  const totalPosts = db.threads.filter((t) => t.authorId === userId).length + db.replies.filter((r) => r.authorId === userId).length;
  if (totalPosts >= 1) badges.add('first_post');
  const acceptedAnswers = db.threads.filter((t) => t.isAnswered && t.authorId === userId).length;
  if (acceptedAnswers >= 1) badges.add('answer_hero');
  const totalUpvotes = db.threads.filter((t) => t.authorId === userId && t.votes > 0).length + db.replies.filter((r) => r.authorId === userId && r.votes > 0).length;
  if (totalUpvotes >= 10) badges.add('top_contributor');
  profile.badges = Array.from(badges);
  profile.reputation = computeReputation(userId);
  saveDb(db);
  return profile.badges;
}

export function listThreads(filters: ThreadFilters = {}): ForumThread[] {
  const db = ensureDb();
  let threads = db.threads.slice();
  if (filters.categoryId) threads = threads.filter((t) => t.categoryId === filters.categoryId);
  if (filters.tag) threads = threads.filter((t) => t.tags.includes(filters.tag!));
  // sort
  switch (filters.sort) {
    case 'top':
      threads.sort((a, b) => b.votes - a.votes);
      break;
    case 'active': {
      const lastActivity = (t: ForumThread) => {
        const replies = db.replies.filter((r) => r.threadId === t.id);
        const latestReply = replies.reduce<string | null>((acc, r) => (acc && acc > r.createdAt ? acc : r.createdAt), null);
        return latestReply || t.updatedAt;
      };
      threads.sort((a, b) => new Date(lastActivity(b)).getTime() - new Date(lastActivity(a)).getTime());
      break;
    }
    default:
      threads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  // pinned first
  threads.sort((a, b) => Number(b.isPinned) - Number(a.isPinned));
  return threads;
}

export function getThread(threadId: string): { thread?: ForumThread; replies: ForumReply[] } {
  const db = ensureDb();
  const thread = db.threads.find((t) => t.id === threadId);
  const replies = db.replies.filter((r) => r.threadId === threadId);
  return { thread, replies };
}

export function createThread(input: {
  categoryId: string;
  title: string;
  body: string;
  tags: string[];
  authorId: string;
  authorName: string;
  authorRole: UserProfile['role'];
}): ForumThread {
  const db = ensureDb();
  const now = new Date().toISOString();
  const thread: ForumThread = {
    id: uuidv4(),
    categoryId: input.categoryId,
    title: input.title,
    body: input.body,
    tags: input.tags,
    authorId: input.authorId,
    authorName: input.authorName,
    authorRole: input.authorRole,
    votes: 0,
    replyCount: 0,
    isAnswered: false,
    isPinned: false,
    isLocked: false,
    isFeatured: false,
    createdAt: now,
    updatedAt: now,
  };
  db.threads.push(thread);
  const existingUser = db.users.find((u) => u.id === input.authorId);
  if (!existingUser) {
    db.users.push({ id: input.authorId, name: input.authorName, role: input.authorRole, avatarUrl: undefined, reputation: 0, badges: [] });
  }
  saveDb(db);
  awardBadges(input.authorId);
  return thread;
}

export function addReply(input: {
  threadId: string;
  parentReplyId?: string;
  body: string;
  authorId: string;
  authorName: string;
  authorRole: UserProfile['role'];
}): ForumReply {
  const db = ensureDb();
  const now = new Date().toISOString();
  const reply: ForumReply = {
    id: uuidv4(),
    threadId: input.threadId,
    parentReplyId: input.parentReplyId,
    authorId: input.authorId,
    authorName: input.authorName,
    authorRole: input.authorRole,
    body: input.body,
    votes: 0,
    createdAt: now,
    updatedAt: now,
  };
  db.replies.push(reply);
  const thread = db.threads.find((t) => t.id === input.threadId);
  if (thread) {
    thread.replyCount += 1;
    thread.updatedAt = now;
  }
  const existingUser = db.users.find((u) => u.id === input.authorId);
  if (!existingUser) {
    db.users.push({ id: input.authorId, name: input.authorName, role: input.authorRole, avatarUrl: undefined, reputation: 0, badges: [] });
  }
  saveDb(db);
  awardBadges(input.authorId);
  return reply;
}

export function vote(target: { type: 'thread' | 'reply'; id: string }, direction: VoteDirection): number {
  const db = ensureDb();
  if (target.type === 'thread') {
    const thread = db.threads.find((t) => t.id === target.id);
    if (!thread) throw new Error('Thread not found');
    thread.votes += direction;
    saveDb(db);
    return thread.votes;
  } else {
    const reply = db.replies.find((r) => r.id === target.id);
    if (!reply) throw new Error('Reply not found');
    reply.votes += direction;
    saveDb(db);
    return reply.votes;
  }
}

export function markAnswered(threadId: string, answered: boolean): ForumThread | undefined {
  const db = ensureDb();
  const thread = db.threads.find((t) => t.id === threadId);
  if (!thread) return undefined;
  thread.isAnswered = answered;
  saveDb(db);
  awardBadges(thread.authorId);
  return thread;
}

export function adminUpdateThread(threadId: string, updates: Partial<Pick<ForumThread, 'isPinned' | 'isLocked' | 'isFeatured'>>): ForumThread | undefined {
  const db = ensureDb();
  const thread = db.threads.find((t) => t.id === threadId);
  if (!thread) return undefined;
  Object.assign(thread, updates);
  saveDb(db);
  return thread;
}

export function createReport(input: { targetType: 'thread' | 'reply'; targetId: string; reporterId: string; reason: string }): Report {
  const db = ensureDb();
  const report: Report = { id: uuidv4(), targetType: input.targetType, targetId: input.targetId, reporterId: input.reporterId, reason: input.reason, createdAt: new Date().toISOString() };
  db.reports.push(report);
  saveDb(db);
  return report;
}