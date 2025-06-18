import { test, expect } from '@playwright/test';

test('guest can view marketplace listings', async ({ page }) => {
  await page.goto('/marketplace');
  await expect(page.getByRole('heading', { name: /marketplace/i })).toBeVisible();
  await expect(page.locator('[data-testid="product-card"]').first()).toBeVisible();
});

test('unauthenticated user redirected to login on add to cart', async ({ page }) => {
  await page.goto('/marketplace');
  await page.locator('[data-testid="product-card"]').first().locator('button:has-text("Add to Cart")').click();
  await expect(page.url()).toBe('/login?next=/marketplace');
});
