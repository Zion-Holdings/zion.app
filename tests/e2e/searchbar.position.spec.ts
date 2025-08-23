import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 375, height: 667 } });

test('search suggestions appear below the nav', async ({ page }) => {
  await page.goto('/search');

  const input = page.getByPlaceholder('Search talent, jobs, and projects...');
  await input.click();
  await input.type('AI');

  const dropdown = page.getByRole('listbox');
  await expect(dropdown).toBeVisible();

  const headerBox = await page.locator('header').boundingBox();
  const dropdownBox = await dropdown.boundingBox();

  expect(dropdownBox!.y).toBeGreaterThanOrEqual(
    (headerBox?.y ?? 0) + (headerBox?.height ?? 0)
  );
});

