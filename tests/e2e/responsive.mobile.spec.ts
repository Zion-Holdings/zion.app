import { test, expect } from '@playwright/test';'import { skipIfNoServer } from './helpers/server-check';'
test.use({ viewport: { width: 375, height: 667 } });

test('Mobile layout works on iPhone 6', async ({ page }, testInfo) => {'  const url = await skipIfNoServer(testInfo);
  if (!url) return;
  await page.goto(`${url}/`);
  await expect(page.locator('nav')).toBeVisible();'  await expect(page.locator('footer')).toBeVisible();'});
