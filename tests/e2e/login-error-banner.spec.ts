import { test, expect } from '@playwright/test';

// Ensure login failure shows banner without crashing

test('shows error banner on failed login', async ({ page }) => {
  const errors: Error[] = [];
  page.on('pageerror', err => errors.push(err));

  await page.route('/api/login', route => {
    route.fulfill({ status: 401, body: 'Unauthorized' });
  });

  await page.goto('/login');
  await page.getByLabelText(/email/i).fill('user@example.com');
  await page.getByLabelText(/password/i).fill('wrong');
  await page.getByRole('button', { name: /login/i }).click();

  await expect(page.getByRole('alert')).toBeVisible();
  expect(errors).toHaveLength(0);
});
