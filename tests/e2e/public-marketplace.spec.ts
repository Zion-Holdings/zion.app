import { test, expect } from '@playwright/test';
// Use the global fetch provided by modern versions of Node.js so we don't
// rely on the optional `node-fetch` dependency which may not be installed in
// minimal environments.
const fetchFn: typeof fetch = (global as any).fetch;

const baseURL = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
// Support fallback to port 3001 (Next.js uses next available port if 3000 is occupied)
const fallbackURL = baseURL.replace('3000', '3001');
let serverURL: string | null = null;

async function isServerRunning(url: string): Promise<boolean> {
  try {
    const res = await fetchFn(url, { method: 'HEAD' });
    return res.ok;
  } catch {
    return false;
  }
}

test.beforeAll(async () => {
  if (await isServerRunning(baseURL)) {
    serverURL = baseURL;
  } else if (await isServerRunning(fallbackURL)) {
    serverURL = fallbackURL;
  }
});

test.beforeEach(async ({}, testInfo) => {
  if (!serverURL) {
    testInfo.skip(`Server not running at ${baseURL} or ${fallbackURL}`);
  }
});

test('guest can view marketplace listings', async ({ page }) => {
  await page.goto(`${serverURL}/marketplace`);
  await expect(page.getByRole('heading', { name: /marketplace/i })).toBeVisible();
  await expect(page.locator('[data-testid="product-card"]').first()).toBeVisible();
});

test('guest can add items to cart without redirect', async ({ page }) => {
  await page.goto(`${serverURL}/marketplace`);
  await page.locator('[data-testid="product-card"]').first().locator('button:has-text("Add to Cart")').click();
  await expect(page.url()).toBe('/marketplace');
});
