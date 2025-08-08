import { config, DEEP_LINKS } from './config.js';
import type { ReminderReason, UserActivityRow } from './supabase.js';
import OpenAI from 'openai';

export interface GeneratedMessage {
  subject: string;
  html: string;
  text: string;
}

const openai = config.OPENAI_API_KEY ? new OpenAI({ apiKey: config.OPENAI_API_KEY }) : null;

export async function generateMessage(user: UserActivityRow, reason: ReminderReason): Promise<GeneratedMessage> {
  if (!openai) {
    return fallbackMessage(user, reason);
  }

  const roleLabel = user.role === 'client' ? 'Client' : user.role === 'talent' ? 'Talent' : 'User';
  const prompt = `You are writing a short, friendly, motivational lifecycle email for a ${roleLabel}.
Constraints:
- Keep subject under 60 chars, body under 120 words
- Include a single, clear CTA with the given deep link
- Do not expose any sensitive data
- Tone: positive, energetic, helpful

Context:
- Reason: ${reason}
- Name: ${user.full_name || 'there'}
- Milestones completed: ${user.milestones_completed ?? 0}
- Client jobs posted: ${user.client_jobs_posted ?? 0}
- Invites sent for last job: ${user.client_invites_sent_for_last_job ?? 0}
- Viewed talent: ${user.client_viewed_talent_count ?? 0}
- Quotes sent: ${user.client_quotes_sent_count ?? 0}
- Deep links: talent=${DEEP_LINKS.talent}, client=${DEEP_LINKS.client}

Return JSON with keys: subject, text, html. The html should be simple, with a single CTA button and basic styling.`;

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You generate succinct lifecycle emails that drive activation.' },
      { role: 'user', content: prompt }
    ],
    temperature: 0.7,
    response_format: { type: 'json_object' }
  });

  const content = completion.choices[0]?.message?.content ?? '';
  try {
    const parsed = JSON.parse(content);
    if (parsed.subject && parsed.text && parsed.html) {
      return parsed as GeneratedMessage;
    }
  } catch (_) {}

  return fallbackMessage(user, reason);
}

function fallbackMessage(user: UserActivityRow, reason: ReminderReason): GeneratedMessage {
  const name = user.full_name || 'there';
  if (reason === 'onboarding_nudge') {
    const subject = '🚀 Boost your visibility on Zion';
    const text = `Hi ${name},\n\nFinish your onboarding to appear in more matches. Set your availability and complete a few quick steps to stand out.\n\nResume where you left off: ${DEEP_LINKS.talent}\n\n— The Zion Team`;
    const html = basicHtmlTemplate(subject, `Hi ${name},`,
      `Finish your onboarding to appear in more matches. Set your availability and complete a few quick steps to stand out.`,
      DEEP_LINKS.talent,
      'Resume onboarding' );
    return { subject, text, html };
  }
  if (reason === 'invite_reminder') {
    const subject = '👋 Invite talent to your job for faster quotes';
    const text = `Hi ${name},\n\nYou posted a job—nice! Next step: invite a few matching pros to get quotes fast.\n\nGo to your job: ${DEEP_LINKS.client}\n\n— The Zion Team`;
    const html = basicHtmlTemplate(subject, `Hi ${name},`,
      `You posted a job—nice! Next step: invite a few matching pros to get quotes fast.`,
      DEEP_LINKS.client,
      'Invite talent' );
    return { subject, text, html };
  }
  // quote_nudge
  const subject = '💬 Ready to request quotes from top talent?';
  const text = `Hi ${name},\n\nYou viewed some great talent. Send a quote request to move things forward and compare responses side-by-side.\n\nFind talent: ${DEEP_LINKS.client}\n\n— The Zion Team`;
  const html = basicHtmlTemplate(subject, `Hi ${name},`,
    `You viewed some great talent. Send a quote request to move things forward and compare responses side-by-side.`,
    DEEP_LINKS.client,
    'Request quotes' );
  return { subject, text, html };
}

function basicHtmlTemplate(title: string, greeting: string, body: string, ctaUrl: string, ctaText: string): string {
  return `<!doctype html>
<html>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#111; line-height:1.5;">
    <div style="max-width:560px; margin:0 auto; padding:24px;">
      <h2 style="margin:0 0 12px 0;">${title}</h2>
      <p style="margin:0 0 12px 0;">${greeting}</p>
      <p style="margin:0 0 20px 0;">${body}</p>
      <p>
        <a href="${ctaUrl}" style="background:#3b82f6; color:#fff; text-decoration:none; padding:10px 16px; border-radius:8px; display:inline-block;">${ctaText}</a>
      </p>
      <p style="font-size:12px; color:#666; margin-top:24px;">You can manage reminder emails in your notification settings.</p>
    </div>
  </body>
</html>`;
}