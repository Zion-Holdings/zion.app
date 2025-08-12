import { test, expect } from '@playwright/test';

// Full user journey covering signup, login, add to cart, checkout and blog navigation

test('user can signup, login, checkout and read blog', async ({ page }) => {
  const email = `user_${Date.now()}@example.com`;

  await page.route('POST', '/auth/register', route => {
    route.fulfill({
      status: 201,
      contentType: 'application/json',
      body: JSON.stringify({ token: 'jwt', user: { id: '1', email } })
    });
  });

  await page.route('POST', '/auth/login', route => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ token: 'jwt', user: { id: '1', email } })
    });
  });

  await page.route('POST', '/api/create-payment-intent', route => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ clientSecret: 'test_secret', id: 'pi_test123' })
    });
  });

  await page.goto('/signup');
  await page.getByLabel('Display Name').fill('Test User');
  await page.getByLabel('Email').fill(email);
  await page.getByLabel('Password').fill('Password123');
  await page.getByLabel('Confirm Password').fill('Password123');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: /create account/i }).click();

  await page.goto('/login');
  await page.getByLabel('Email').fill(email);
  await page.getByLabel('Password').fill('Password123');
  await page.getByRole('button', { name: /login/i }).click();

  await page.goto('/equipment/pro-camera-x1000');
  await page.getByRole('button', { name: /add to cart/i }).click();

  await page.goto('/cart');
  await page.getByRole('button', { name: /checkout/i }).click();

  await page.getByLabel('Name').fill('Test User');
  await page.getByLabel('Email').fill('qa@example.com');
  await page.getByLabel('Address').fill('123 Test St');
  await page.getByLabel('City').fill('Testville');
  await page.getByLabel('Country').fill('Testland');

  await page.evaluate(() => {
    window.Stripe = () => ({
      confirmCardPayment: () => Promise.resolve({ paymentIntent: { id: 'pi_test123', status: 'succeeded' } }),
      elements: () => ({ getElement: () => ({}) })
    });
  });

  await page.getByRole('button', { name: /pay/i }).click();
  await expect(page).toHaveURL(/order-confirmation\/pi_test123/);

  await page.goto('/blog');
  await expect(page.getByRole('heading', { name: /latest articles/i })).toBeVisible();
  await page.getByRole('link', { name: /read more/i }).first().click();
  await expect(page.url()).toMatch(/\/blog\//);
});
