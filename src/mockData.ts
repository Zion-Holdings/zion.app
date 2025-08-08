import type { UserActivityRow } from './supabase.js';

export function mockUsers(): UserActivityRow[] {
  const nowMinus = (hours: number) => new Date(Date.now() - hours * 3600_000).toISOString();
  return [
    {
      user_id: '00000000-0000-0000-0000-000000000001',
      email: 'talent1@example.com',
      full_name: 'Taylor T.',
      role: 'talent',
      last_login_at: nowMinus(80),
      milestones_completed: 2,
      client_jobs_posted: null,
      client_last_job_id: null,
      client_invites_sent_for_last_job: null,
      client_viewed_talent_count: null,
      client_quotes_sent_count: null,
      last_message_sent_at: null,
      receive_reminders: true
    },
    {
      user_id: '00000000-0000-0000-0000-000000000002',
      email: 'client1@example.com',
      full_name: 'Casey C.',
      role: 'client',
      last_login_at: nowMinus(100),
      milestones_completed: null,
      client_jobs_posted: 1,
      client_last_job_id: 'job-123',
      client_invites_sent_for_last_job: 0,
      client_viewed_talent_count: 0,
      client_quotes_sent_count: 0,
      last_message_sent_at: null,
      receive_reminders: true
    },
    {
      user_id: '00000000-0000-0000-0000-000000000003',
      email: 'client2@example.com',
      full_name: 'Jordan J.',
      role: 'client',
      last_login_at: nowMinus(90),
      milestones_completed: null,
      client_jobs_posted: 2,
      client_last_job_id: 'job-456',
      client_invites_sent_for_last_job: 5,
      client_viewed_talent_count: 3,
      client_quotes_sent_count: 0,
      last_message_sent_at: null,
      receive_reminders: true
    }
  ];
}