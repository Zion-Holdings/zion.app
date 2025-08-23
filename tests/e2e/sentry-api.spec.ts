import { test, expect } from '@playwright/test';

const SENTRY_API_TOKEN = process.env.SENTRY_API_TOKEN;
const SENTRY_PROJECT_SLUG = process.env.SENTRY_PROJECT_SLUG || process.env.SENTRY_PROJECT;
const SENTRY_ORG_SLUG = process.env.SENTRY_ORG_SLUG || process.env.SENTRY_ORG;

async function pollSentryForEvent(request: any) {
  if (!SENTRY_API_TOKEN || !SENTRY_PROJECT_SLUG || !SENTRY_ORG_SLUG) {
    return; // required env vars not provided
  }
  const deadline = Date.now() + 30_000;
  const headers = {
    Authorization: `Bearer ${SENTRY_API_TOKEN}`,
    Accept: 'application/json',
  };
  while (Date.now() < deadline) {
    const res = await request.get(
      `https://sentry.io/api/0/projects/${SENTRY_ORG_SLUG}/${SENTRY_PROJECT_SLUG}/events/`,
      { headers }
    );
    if (res.ok()) {
      const events = await res.json();
      if (
        Array.isArray(events) &&
        events.some((e: any) => e.message?.includes('Sentry Test API Error'))
      ) {
        return;
      }
    }
    await new Promise((r) => setTimeout(r, 5000));
  }
  throw new Error('Sentry event not found within 30 seconds');
}

test('Sentry test error endpoint sends error to Sentry', async ({ request }) => {
  const response = await request.get(
    'https://app.ziontechgroup.com/api/sentry-test-error-api'
  );
  expect(response.ok()).toBeTruthy();
  const json = await response.json();
  expect(json.error).toBe('Sentry Test API Error');

  await pollSentryForEvent(request);
});

