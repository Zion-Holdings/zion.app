import { createClient } from '@supabase/supabase-js';
import { config } from './config.js';

export const supabase = createClient(
  config.SUPABASE_URL,
  config.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: { persistSession: false }
  }
);

export type UserRole = 'talent' | 'client' | 'other';
export type ReminderReason = 'onboarding_nudge' | 'invite_reminder' | 'quote_nudge';

export interface UserActivityRow {
  user_id: string;
  email: string | null;
  full_name: string | null;
  role: UserRole;
  last_login_at: string | null; // ISO
  milestones_completed: number | null; // for talent
  client_jobs_posted: number | null; // for client
  client_last_job_id: string | null;
  client_invites_sent_for_last_job: number | null;
  client_viewed_talent_count: number | null;
  client_quotes_sent_count: number | null;
  last_message_sent_at: string | null;
  receive_reminders: boolean | null;
}

export interface ReminderLog {
  id: string;
  user_id: string;
  reason: ReminderReason;
  email_to: string | null;
  email_provider: string | null;
  provider_message_id: string | null;
  subject: string | null;
  sent_at: string;
  metadata: Record<string, unknown> | null;
}

export async function fetchCandidateUsers(inactivityHours: number, limit: number, userIdFilter?: string) {
  // Expect a view `user_activity_summary` to exist in public schema
  const now = new Date();
  const inactivityCutoff = new Date(now.getTime() - inactivityHours * 60 * 60 * 1000);

  let query = supabase
    .from('user_activity_summary')
    .select('*')
    .lte('last_login_at', inactivityCutoff.toISOString())
    .eq('is_active', true)
    .order('last_login_at', { ascending: true })
    .limit(limit);

  if (userIdFilter) {
    query = query.eq('user_id', userIdFilter);
  }

  const { data, error } = await query;
  if (error) {
    throw new Error(`Failed to fetch user activity: ${error.message}`);
  }

  return (data as unknown as UserActivityRow[]) || [];
}

export async function hasRecentReminder(userId: string, reason: ReminderReason, cooldownDays: number): Promise<boolean> {
  const cutoff = new Date(Date.now() - cooldownDays * 24 * 60 * 60 * 1000).toISOString();
  const { data, error } = await supabase
    .from('reminder_log')
    .select('id')
    .eq('user_id', userId)
    .eq('reason', reason)
    .gte('sent_at', cutoff)
    .limit(1)
    .maybeSingle();
  if (error && error.code !== 'PGRST116') {
    throw new Error(`Failed to check reminder_log: ${error.message}`);
  }
  return !!data;
}

export async function insertReminderLog(params: {
  userId: string;
  reason: ReminderReason;
  emailTo: string | null;
  emailProvider: string | null;
  providerMessageId: string | null;
  subject: string | null;
  metadata?: Record<string, unknown>;
}) {
  const { data, error } = await supabase
    .from('reminder_log')
    .insert({
      user_id: params.userId,
      reason: params.reason,
      email_to: params.emailTo,
      email_provider: params.emailProvider,
      provider_message_id: params.providerMessageId,
      subject: params.subject,
      metadata: params.metadata ?? null
    })
    .select('*')
    .single();
  if (error) {
    throw new Error(`Failed to insert reminder_log: ${error.message}`);
  }
  return data as ReminderLog;
}