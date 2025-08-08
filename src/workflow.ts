import { config } from './config.js';
import { differenceInHours, parseISO } from 'date-fns';
import { fetchCandidateUsers, hasRecentReminder, insertReminderLog, type ReminderReason, type UserActivityRow } from './supabase.js';
import { generateMessage } from './messageGenerator.js';
import { sendEmail } from './email.js';

export interface RunStats {
  scanned: number;
  eligible: number;
  sent: number;
  skipped: number;
  errors: number;
  details: { userId: string; reason: ReminderReason; status: 'sent' | 'skipped' | 'error'; note?: string }[];
}

function pickReason(user: UserActivityRow): ReminderReason | null {
  // Must be inactive for at least INACTIVITY_HOURS; caller filters this already.
  if (user.role === 'talent') {
    const milestones = user.milestones_completed ?? 0;
    if (milestones < 3) return 'onboarding_nudge';
  }
  if (user.role === 'client') {
    const jobsPosted = user.client_jobs_posted ?? 0;
    const invitesForLastJob = user.client_invites_sent_for_last_job ?? 0;
    const viewedTalent = user.client_viewed_talent_count ?? 0;
    const quotesSent = user.client_quotes_sent_count ?? 0;

    if (jobsPosted > 0 && invitesForLastJob === 0) return 'invite_reminder';
    if (viewedTalent > 0 && quotesSent === 0) return 'quote_nudge';
  }
  return null;
}

export async function processRows(rows: UserActivityRow[]): Promise<RunStats> {
  const stats: RunStats = { scanned: rows.length, eligible: 0, sent: 0, skipped: 0, errors: 0, details: [] };

  for (const user of rows) {
    try {
      if (user.receive_reminders === false) {
        stats.skipped++;
        stats.details.push({ userId: user.user_id, reason: 'onboarding_nudge', status: 'skipped', note: 'opted-out' });
        continue;
      }

      const lastLogin = user.last_login_at ? parseISO(user.last_login_at) : null;
      const hours = lastLogin ? differenceInHours(new Date(), lastLogin) : config.INACTIVITY_HOURS + 1;
      if (hours < config.INACTIVITY_HOURS) {
        stats.skipped++;
        stats.details.push({ userId: user.user_id, reason: 'onboarding_nudge', status: 'skipped', note: 'not inactive long enough' });
        continue;
      }

      const reason = pickReason(user);
      if (!reason) {
        stats.skipped++;
        stats.details.push({ userId: user.user_id, reason: 'onboarding_nudge', status: 'skipped', note: 'no matching condition' });
        continue;
      }

      const already = await hasRecentReminder(user.user_id, reason, config.REMINDER_COOLDOWN_DAYS).catch(() => false);
      if (already) {
        stats.skipped++;
        stats.details.push({ userId: user.user_id, reason, status: 'skipped', note: 'cooldown' });
        continue;
      }

      const email = user.email;
      if (!email) {
        stats.skipped++;
        stats.details.push({ userId: user.user_id, reason, status: 'skipped', note: 'no email' });
        continue;
      }

      const message = await generateMessage(user, reason);

      if (config.DRY_RUN) {
        stats.sent++;
        stats.details.push({ userId: user.user_id, reason, status: 'sent', note: 'dry-run (not actually sent)' });
        continue;
      }

      const sendResult = await sendEmail({ to: email, subject: message.subject, html: message.html, text: message.text });

      await insertReminderLog({
        userId: user.user_id,
        reason,
        emailTo: email,
        emailProvider: sendResult.provider,
        providerMessageId: sendResult.messageId,
        subject: message.subject,
        metadata: { role: user.role }
      });

      stats.sent++;
      stats.details.push({ userId: user.user_id, reason, status: 'sent' });
    } catch (err: any) {
      stats.errors++;
      stats.details.push({ userId: user.user_id, reason: 'onboarding_nudge', status: 'error', note: err?.message || String(err) });
    }
  }

  return stats;
}

export async function runWorkflow(options: { limit?: number; userId?: string } = {}): Promise<RunStats> {
  const limit = options.limit ?? config.MAX_EMAILS_PER_RUN;
  const rows = await fetchCandidateUsers(config.INACTIVITY_HOURS, limit, options.userId);
  return processRows(rows);
}