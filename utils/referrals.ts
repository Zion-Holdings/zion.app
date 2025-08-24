export type ReferralEvent = 'visit' | 'signup' | 'profile_completed' | 'job_created' | 'hire';

export async function triggerReferralEvent(event: ReferralEvent, code?: string) {
  try {
    const refCode = code || (typeof window !== 'undefined' ? (localStorage.getItem('ref_code') || '') : '');
    if (!refCode) return;
    await fetch('/api/referrals/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: refCode, event, url: typeof window !== 'undefined' ? window.location.href : '', referrer: typeof document !== 'undefined' ? document.referrer : '' }),
    });
  } catch {}
}