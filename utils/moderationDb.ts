import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import crypto from 'crypto';
import { FlaggedContent, ModerationStatus, AiScores } from '../types/moderation';

const mkdir = promisify(fs.mkdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const ROOT = path.join(process.cwd(), 'data');
const MODERATION_FILE = path.join(ROOT, 'moderation.json');

async function ensureBaseFiles() {
  await mkdir(ROOT, { recursive: true });
  try {
    await readFile(MODERATION_FILE, 'utf8');
  } catch {
    await writeFile(MODERATION_FILE, JSON.stringify({ flags: [] }, null, 2), 'utf8');
  }
}

export async function readAllFlags(): Promise<FlaggedContent[]> {
  await ensureBaseFiles();
  const raw = await readFile(MODERATION_FILE, 'utf8');
  const data = JSON.parse(raw) as { flags: FlaggedContent[] };
  return data.flags || [];
}

export async function writeAllFlags(flags: FlaggedContent[]): Promise<void> {
  await ensureBaseFiles();
  await writeFile(MODERATION_FILE, JSON.stringify({ flags }, null, 2), 'utf8');
}

export function generateFlagId(): string {
  return `FLG-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;
}

export function generateAiScores(seed?: string): AiScores {
  const buf = crypto.createHash('sha256').update(seed || String(Date.now())).digest();
  const v = (i: number) => Number((buf[i] / 255).toFixed(2));
  return { toxicity: v(0), nsfw: v(1), scam: v(2) };
}

export async function getFlagById(id: string): Promise<FlaggedContent | undefined> {
  const all = await readAllFlags();
  return all.find(f => f.id === id);
}

export async function upsertFlag(flag: FlaggedContent): Promise<void> {
  const all = await readAllFlags();
  const idx = all.findIndex(f => f.id === flag.id);
  if (idx >= 0) all[idx] = flag; else all.push(flag);
  await writeAllFlags(all);
}

export async function createFlag(init: Omit<FlaggedContent, 'id' | 'createdAt' | 'updatedAt' | 'aiScores' | 'status'> & { status?: ModerationStatus; aiScores?: AiScores }): Promise<FlaggedContent> {
  const now = new Date().toISOString();
  const flag: FlaggedContent = {
    id: generateFlagId(),
    createdAt: now,
    updatedAt: now,
    status: init.status || 'pending',
    aiScores: init.aiScores || generateAiScores(init.contentId + init.userId),
    ...init,
  };
  const all = await readAllFlags();
  all.push(flag);
  await writeAllFlags(all);
  return flag;
}

export async function updateFlagStatus(id: string, status: ModerationStatus, adminNotes?: string): Promise<FlaggedContent | undefined> {
  const flag = await getFlagById(id);
  if (!flag) return undefined;
  flag.status = status;
  flag.adminNotes = adminNotes || flag.adminNotes;
  flag.updatedAt = new Date().toISOString();
  await upsertFlag(flag);
  return flag;
}