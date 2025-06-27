import { test, expect } from '@storybook/test-runner';

// This test verifies the Pagination component renders consistently in Storybook.
// It assumes Storybook is running on port 6006.

test('Pagination five page view', async ({ page }) => {
  await page.goto('http://localhost:6006/iframe.html?id=components-pagination--five-pages');
  const nav = page.locator('nav[aria-label="pagination"]');
  await expect(nav).toHaveScreenshot();
});

