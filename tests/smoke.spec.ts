import { test, expect } from '@playwright/test';

test.describe('Smoke Tests', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check page loads without errors
    await expect(page).toHaveTitle(/Zion/);
    
    // Check for critical content
    await expect(page.locator('h1')).toBeVisible();
    
    // Check for navigation elements
    await expect(page.locator('nav')).toBeVisible();
    
    // Check for footer
    await expect(page.locator('footer')).toBeVisible();
  });

  test('explore page loads successfully', async ({ page }) => {
    await page.goto('/explore');
    
    // Check page loads
    await expect(page).toHaveTitle(/Explore/);
    
    // Check for content
    await expect(page.locator('main')).toBeVisible();
  });

  test('front page loads successfully', async ({ page }) => {
    await page.goto('/front');
    
    // Check page loads
    await expect(page).toHaveTitle(/Front/);
    
    // Check for content
    await expect(page.locator('main')).toBeVisible();
  });

  test('newsroom page loads successfully', async ({ page }) => {
    await page.goto('/newsroom');
    
    // Check page loads
    await expect(page).toHaveTitle(/Newsroom/);
    
    // Check for content
    await expect(page.locator('main')).toBeVisible();
  });

  test('contact page loads successfully', async ({ page }) => {
    await page.goto('/contact');
    
    // Check page loads
    await expect(page).toHaveTitle(/Contact/);
    
    // Check for form elements
    await expect(page.locator('form')).toBeVisible();
  });

  test('search functionality works', async ({ page }) => {
    await page.goto('/');
    
    // Look for search input
    const searchInput = page.locator('input[type="search"], input[placeholder*="search"], input[name*="search"]').first();
    
    if (await searchInput.isVisible()) {
      await searchInput.fill('test');
      await searchInput.press('Enter');
      
      // Should navigate to search results or show results
      await expect(page).not.toHaveURL('/');
    }
  });

  test('navigation between pages works', async ({ page }) => {
    await page.goto('/');
    
    // Find navigation links
    const navLinks = page.locator('nav a[href^="/"]');
    
    if (await navLinks.count() > 0) {
      // Click first navigation link
      const firstLink = navLinks.first();
      const href = await firstLink.getAttribute('href');
      
      if (href && href !== '/') {
        await firstLink.click();
        
        // Should navigate to new page
        await expect(page).toHaveURL(href);
        
        // Page should load
        await expect(page.locator('main')).toBeVisible();
      }
    }
  });
});
