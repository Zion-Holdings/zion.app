import { test, expect } from '@playwright/test';'import { skipIfNoServer } from './helpers/server-check';''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
test('shows 404 page for unknown routes', async ({ page }, testInfo) => {'  const serverURL = await skipIfNoServer(testInfo);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  if (!serverURL) return;

  const errors: Error[] = [];
  page.on('pageerror', err => errors.push(err));''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  await page.goto(`${serverURL}/some/non-existent-page`, { waitUntil: 'networkidle' });''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  await expect(
    page.getByRole('heading', { name: /page not found/i })'  ).toBeVisible();'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  await expect(
    page.getByRole('link', { name: /return to home/i })'  ).toBeVisible();'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

  expect(errors).toHaveLength(0);
});
