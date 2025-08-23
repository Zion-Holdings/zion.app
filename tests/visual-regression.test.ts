import { test, expect } from '@playwright/test';

test('Homepage visual regression', async ({ page }) => {
  await page.goto('/');
  expect(await page.screenshot()).toMatchSnapshot('homepage.png', { threshold: 0.1 });
});
