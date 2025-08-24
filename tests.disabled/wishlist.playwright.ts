import { test, expect } from '@playwright/test';

// Basic wishlist flow
// This test assumes a seeded product listing is available on the home page

test('can save item to wishlist and remove it', async ({ page }) => {
  // Login (using any available credentials in the test env)
  await page.goto('/login');
  await page.fill('input[name="email"]', 'user@example.com');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');

  // Save first item
  await page.goto('/marketplace');
  await page.locator('[aria-label="save-to-wishlist"]').first().click();

  // Check wishlist
  await page.goto('/wishlist');
  const item = page.locator('text=Go to item');
  await expect(item).toBeVisible();

  // Remove
  await page.click('text=Remove');
  await expect(item).not.toBeVisible();
});
