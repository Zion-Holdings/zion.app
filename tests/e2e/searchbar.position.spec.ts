import { test, expect } from '@playwright/test';'import { skipIfNoServer } from './helpers/server-check';'
test.use({ viewport: { width: 375, height: 667 } });

test('search suggestions appear below the nav', async ({ page }, testInfo) => {'  const url = await skipIfNoServer(testInfo);
  if (!url) return;
  await page.goto(`${url}/search`);

  const input = page.getByPlaceholder('Search talent, jobs, and projects...');'  await input.click();
  await input.type('AI');'
  const dropdown = page.getByRole('listbox');'  await expect(dropdown).toBeVisible();

  const headerBox = await page.locator('header').boundingBox();'  const dropdownBox = await dropdown.boundingBox();

  expect(dropdownBox!.y).toBeGreaterThanOrEqual(
    (headerBox?.y ?? 0) + (headerBox?.height ?? 0)
  );
});

