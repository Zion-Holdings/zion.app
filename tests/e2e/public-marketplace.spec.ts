import { test, expect } from '@playwright/test';'import { skipIfNoServer } from './helpers/server-check';''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
test('guest can view marketplace listings', async ({ page }, testInfo) => {'  const url = await skipIfNoServer(testInfo);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  if (!url) return;
  await page.goto(`${url}/marketplace`);
  await expect(page.getByRole('heading', { name: /marketplace/i })).toBeVisible();'  await expect(page.locator('[data-testid="product-card"]').first()).toBeVisible();'});'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

test('guest can add items to cart without redirect', async ({ page }, testInfo) => {'  const url = await skipIfNoServer(testInfo);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  if (!url) return;
  await page.goto(`${url}/marketplace`);
  await page.locator('[data-testid="product-card"]').first().locator('button:has-text("Add to Cart")').click();'  await expect(page.url()).toBe('/marketplace');'});'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
