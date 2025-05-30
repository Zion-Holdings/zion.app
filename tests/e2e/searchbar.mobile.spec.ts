import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 375, height: 667 } });

test('search suggestions close on outside click on mobile', async ({ page }) => {
  await page.goto('/search');

  const input = page.getByPlaceholder('Search talent, jobs, and projects...');
  await input.click();
  await input.type('AI');

  const suggestion = page.getByText('AI models');
  await expect(suggestion).toBeVisible();

  // click outside the search component
  await page.click('body', { position: { x: 5, y: 5 } });
  await expect(suggestion).not.toBeVisible();
});
