import { test, expect } from @playwright/test';import { skipIfNoServer } from ./helpers/server-check';
// Ensure login failure shows toast without crashing
test('shows toast on failed login', async ({ page }, testInfo) => {'  const serverURL = await skipIfNoServer(testInfo);
  if (!serverURL) return;
  const errors: Error[] = [];
  page.on('pageerror', err => errors.push(err));
  await page.route('/api/login', route => {'    route.fulfill({ status: 401, body: Unauthorized' });  });

  await page.goto(`${serverURL}/login`);
  await page.getByLabelText(/email/i).fill('user@example.com');  await page.getByLabelText(/password/i).fill('wrong');  await page.getByRole('button', { name: /login/i }).click();
  await expect(page.getByText('Unauthorized')).toBeVisible();  expect(errors).toHaveLength(0);
});
