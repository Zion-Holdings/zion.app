import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import crypto from 'crypto';
import { DisputeCase } from '../types/disputes';

const mkdir = promisify(fs.mkdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const ROOT = path.join(process.cwd(), 'data');
const DISPUTES_FILE = path.join(ROOT, 'disputes.json');
const UPLOADS_ROOT = path.join(ROOT, 'uploads', 'disputes');

export function generateCaseId(): string {
  const date = new Date();
  const y = String(date.getFullYear());
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const suffix = crypto.randomBytes(3).toString('hex').toUpperCase();
  return `DSP-${y}${m}${d}-${suffix}`;
}

async function ensureBaseFiles() {
  try {
    await mkdir(ROOT, { recursive: true });
  } catch {}
  try {
    await mkdir(UPLOADS_ROOT, { recursive: true });
  } catch {}
  try {
    await readFile(DISPUTES_FILE, 'utf8');
  } catch {
    await writeFile(DISPUTES_FILE, JSON.stringify({ disputes: [] }, null, 2), 'utf8');
  }
}

export async function readAllDisputes(): Promise<DisputeCase[]> {
  await ensureBaseFiles();
  const raw = await readFile(DISPUTES_FILE, 'utf8');
  const data = JSON.parse(raw) as { disputes: DisputeCase[] };
  return data.disputes || [];
}

export async function writeAllDisputes(disputes: DisputeCase[]): Promise<void> {
  await ensureBaseFiles();
  const data = { disputes };
  await writeFile(DISPUTES_FILE, JSON.stringify(data, null, 2), 'utf8');
}

export async function getDisputeById(id: string): Promise<DisputeCase | undefined> {
  const all = await readAllDisputes();
  return all.find(d => d.id === id);
}

export async function upsertDispute(updated: DisputeCase): Promise<void> {
  const all = await readAllDisputes();
  const idx = all.findIndex(d => d.id === updated.id);
  if (idx >= 0) {
    all[idx] = updated;
  } else {
    all.push(updated);
  }
  await writeAllDisputes(all);
}

export async function createDispute(dispute: DisputeCase): Promise<void> {
  const all = await readAllDisputes();
  all.push(dispute);
  await writeAllDisputes(all);
}

export function getDisputeUploadDir(caseId: string): string {
  return path.join(UPLOADS_ROOT, caseId);
}

export async function ensureDisputeUploadDir(caseId: string): Promise<string> {
  const dir = getDisputeUploadDir(caseId);
  await mkdir(dir, { recursive: true });
  return dir;
}