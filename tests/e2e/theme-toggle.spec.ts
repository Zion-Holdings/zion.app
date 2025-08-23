import { test, expect } from '@playwright/test';

test('Toggle theme from light to dark', async ({ page }) => {
  await page.goto('/');
  await page.click('[data-testid="theme-toggle"]');
  const html = page.locator('html');
  await expect(html).toHaveAttribute('data-theme', 'dark');
});

test('Theme remains dark after reload', async ({ page }) => {
  await page.goto('/');
  await page.click('[data-testid="theme-toggle"]');
  await page.reload();
  const html = page.locator('html');
  await expect(html).toHaveAttribute('data-theme', 'dark');
});