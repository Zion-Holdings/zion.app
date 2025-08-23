import { test, expect } from '@storybook/test-runner';

// This test assumes Storybook is running on port 6006
// and verifies the TalentProfilePage renders consistently.

test('TalentProfilePage default view', async ({ page }) => {
  await page.goto('http://localhost:6006/iframe.html?id=pages-talentprofilepage--default');
  const heading = page.locator('[data-testid="profile-name"]');
  await expect(heading).toHaveScreenshot();
});
