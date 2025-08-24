import { test, expect } from '@playwright/test';

test('talent profile name visible', async ({ page }) => {
  await page.route('**/talent/123', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        profile: {
          id: '123',
          full_name: 'Playwright Talent',
          bio: '',
          skills: [],
          hourly_rate: 100,
        },
      }),
    });
  });

  await page.goto('/talent/123');
  await expect(page.getByTestId('profile-name')).toHaveText('Playwright Talent');
});
