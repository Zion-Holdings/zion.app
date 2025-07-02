import { test, expect } from '@playwright/test';
import fetch from 'node-fetch';

const baseURL = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';

async function isServerRunning(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.ok;
  } catch {
    return false;
  }
}

test.beforeEach(async ({}, testInfo) => {
  if (!(await isServerRunning(baseURL))) {
    testInfo.skip(`Server not running at ${baseURL}`);
  }
});

test('guest can view marketplace listings', async ({ page }) => {
  await page.goto('/marketplace');
  await expect(page.getByRole('heading', { name: /marketplace/i })).toBeVisible();
  await expect(page.locator('[data-testid="product-card"]').first()).toBeVisible();
});

test('guest can add items to cart without redirect', async ({ page }) => {
  await page.goto('/marketplace');
  await page.locator('[data-testid="product-card"]').first().locator('button:has-text("Add to Cart")').click();
  await expect(page.url()).toBe('/marketplace');
});
