import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';
import type { CreateInterviewInput, Interview, UpdateInterviewInput } from '../types/interview';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const table = 'interviews';

// Simple in-memory fallback for local dev without Supabase
const useMock = !supabaseUrl || !supabaseKey;
let mockStore: Interview[] = [];

function nowIso(): string {
  return new Date().toISOString();
}

function ensureClient() {
  if (useMock) return null as any;
  return createClient(supabaseUrl, supabaseKey);
}

export async function createInterview(input: CreateInterviewInput): Promise<Interview> {
  const interview: Interview = {
    id: uuidv4(),
    clientId: input.clientId,
    talentId: input.talentId,
    startTimeIso: input.startTimeIso,
    durationMinutes: input.durationMinutes,
    meetingLink: input.meetingLink,
    notes: input.notes,
    status: 'requested',
    createdAtIso: nowIso(),
    updatedAtIso: nowIso(),
  };

  if (useMock) {
    mockStore.push(interview);
    return interview;
  }

  const supabase = ensureClient();
  const { data, error } = await supabase.from(table).insert(interview).single();
  if (error) throw error;
  return data as Interview;
}

export async function listInterviewsForUser(userId: string): Promise<Interview[]> {
  if (!userId) return [];
  if (useMock) {
    return mockStore.filter((i) => i.clientId === userId || i.talentId === userId);
  }
  const supabase = ensureClient();
  const { data, error } = await supabase
    .from(table)
    .select('*')
    .or(`clientId.eq.${userId},talentId.eq.${userId}`)
    .order('startTimeIso', { ascending: true });
  if (error) throw error;
  return (data || []) as Interview[];
}

export async function getInterviewById(id: string): Promise<Interview | null> {
  if (useMock) {
    return mockStore.find((i) => i.id === id) || null;
  }
  const supabase = ensureClient();
  const { data, error } = await supabase.from(table).select('*').eq('id', id).single();
  if (error) throw error;
  return (data || null) as Interview | null;
}

export async function updateInterview(id: string, updates: UpdateInterviewInput): Promise<Interview> {
  if (useMock) {
    const idx = mockStore.findIndex((i) => i.id === id);
    if (idx === -1) throw new Error('Interview not found');
    const updated: Interview = { ...mockStore[idx], ...updates, updatedAtIso: nowIso() };
    mockStore[idx] = updated;
    return updated;
  }
  const supabase = ensureClient();
  const payload = { ...updates, updatedAtIso: nowIso() } as any;
  const { data, error } = await supabase.from(table).update(payload).eq('id', id).single();
  if (error) throw error;
  return data as Interview;
}

export async function proposeNewTime(id: string, proposedTimeIso: string, durationMinutes?: number): Promise<Interview> {
  return updateInterview(id, { status: 'proposed', proposedTimeIso, durationMinutes });
}

export function getJoinButtonEnabled(startTimeIso: string): boolean {
  const start = new Date(startTimeIso).getTime();
  const now = Date.now();
  return now >= start;
}

export function getMinutesUntil(startTimeIso: string): number {
  const diffMs = new Date(startTimeIso).getTime() - Date.now();
  return Math.max(0, Math.floor(diffMs / 60000));
}