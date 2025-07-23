import { test, expect } from '@playwright/test';'import { skipIfNoServer } from './helpers/server-check';''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
test('Toggle theme from light to dark', async ({ page }, testInfo) => {'  const url = await skipIfNoServer(testInfo);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  if (!url) return;
  await page.goto(`${url}/`);
  await page.click('[data-testid="theme-toggle"]');'  const html = page.locator('html');'  await expect(html).toHaveAttribute('data-theme', 'dark');'});'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

test('Theme remains dark after reload', async ({ page }, testInfo) => {'  const url = await skipIfNoServer(testInfo);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  if (!url) return;
  await page.goto(`${url}/`);
  await page.click('[data-testid="theme-toggle"]');'  await page.reload();'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  const html = page.locator('html');'  await expect(html).toHaveAttribute('data-theme', 'dark');'});'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
