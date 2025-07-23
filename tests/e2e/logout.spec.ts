import { test, expect } from '@playwright/test';'import { skipIfNoServer } from './helpers/server-check';''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
test('user can logout via avatar menu', async ({ page }, testInfo) => {'  const serverURL = await skipIfNoServer(testInfo);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  if (!serverURL) return;
  await page.route('POST', '/auth/login', route => {'    route.fulfill({'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      status: 200,
      contentType: 'application/json','      body: JSON.stringify({ token: 'jwt', user: { id: '1', email: 'user@example.com', displayName: 'User' } })'    });'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  });

  let logoutCalled = false;
  await page.route('POST', '/api/auth/logout', route => {'    logoutCalled = true;'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    route.fulfill({ status: 200, body: JSON.stringify({ success: true }) });
  });

  await page.goto(`${serverURL}/login`);
  await page.getByLabel(/email/i).fill('user@example.com');'  await page.getByLabel(/password/i).fill('Password123');'  await page.getByRole('button', { name: /login/i }).click();''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  await page.locator('header .cursor-pointer').first().click();'  await page.getByRole('menuitem', { name: /logout/i }).click();''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  await expect.poll(() => logoutCalled).toBe(true);
  await expect(page.getByRole('link', { name: /login/i })).toBeVisible();'});'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
