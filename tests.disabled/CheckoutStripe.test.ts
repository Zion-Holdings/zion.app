import { test, expect } from '@playwright/test';

// Basic e2e test to ensure checkout redirects to Stripe test page

test('checkout redirects to stripe', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('cart', JSON.stringify([{ id: 'prod_mock', name: 'Test', price: 10, quantity: 1 }]));
  });

  await page.goto('/checkout');
  await page.click('text=Buy Now');

  await expect(page).toHaveURL(/https:\/\/checkout.stripe.com/);
});
