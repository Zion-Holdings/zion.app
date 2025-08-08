import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { Project, Milestone, MilestoneStatus, isMilestoneStatus } from '../types/milestones';
import { CurrentUser } from './auth';

const DATA_FILE = path.join(process.cwd(), 'data', 'projects.json');

type DbShape = { projects: Project[] };

function readDb(): DbShape {
  const raw = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(raw) as DbShape;
}

function writeDb(db: DbShape) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(db, null, 2), 'utf8');
}

export function getProject(projectId: string): Project | null {
  const db = readDb();
  return db.projects.find((p) => p.id === projectId) || null;
}

export function saveProject(updated: Project): void {
  const db = readDb();
  const idx = db.projects.findIndex((p) => p.id === updated.id);
  if (idx === -1) {
    db.projects.push(updated);
  } else {
    db.projects[idx] = updated;
  }
  writeDb(db);
}

export function assertParticipantOrAdmin(
  project: Project,
  user: CurrentUser
): boolean {
  if (user.role === 'admin') return true;
  const { clientUserId, talentUserId } = project.participants;
  return user.userId === clientUserId || user.userId === talentUserId;
}

export function isClient(project: Project, user: CurrentUser): boolean {
  return user.role === 'admin' || user.userId === project.participants.clientUserId;
}

export function isTalent(project: Project, user: CurrentUser): boolean {
  return user.role === 'admin' || user.userId === project.participants.talentUserId;
}

export function generateId(prefix: string = 'id'): string {
  const rand = Math.random().toString(36).slice(2, 8);
  const time = Date.now().toString(36);
  return `${prefix}_${time}_${rand}`;
}

export function addMilestone(
  project: Project,
  payload: Omit<Milestone, 'id' | 'createdAt' | 'updatedAt' | 'status'> & { status?: MilestoneStatus }
): Milestone {
  const now = new Date().toISOString();
  const m: Milestone = {
    id: generateId('ms'),
    title: payload.title,
    description: payload.description,
    dueDate: payload.dueDate,
    amountUsd: payload.amountUsd,
    status: payload.status && isMilestoneStatus(payload.status) ? payload.status : 'Pending',
    attachments: payload.attachments || [],
    createdAt: now,
    updatedAt: now,
  };
  project.milestones.push(m);
  project.updatedAt = now;
  saveProject(project);
  return m;
}

export function updateMilestone(
  project: Project,
  milestoneId: string,
  update: Partial<Milestone>
): Milestone | null {
  const idx = project.milestones.findIndex((m) => m.id === milestoneId);
  if (idx === -1) return null;
  const now = new Date().toISOString();
  const next: Milestone = { ...project.milestones[idx], ...update, updatedAt: now };
  project.milestones[idx] = next;
  project.updatedAt = now;
  saveProject(project);
  return next;
}