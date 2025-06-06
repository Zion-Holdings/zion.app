import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 375, height: 667 } });

test('Mobile layout works on iPhone 6', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('nav')).toBeVisible();
  await expect(page.locator('footer')).toBeVisible();
});
