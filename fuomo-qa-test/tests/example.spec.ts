import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Fuomo Homepage Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });

  test('Homepage loads successfully with status 200 and title', async ({ page }) => {
    const response = await homePage.goto();
    
    expect(response?.status()).toBe(200);
    
    const title = await page.title();
    expect(title).not.toBe('');
  });

  test('Main UI elements are visible', async () => {
    await homePage.goto();
    
    await expect(homePage.logo).toBeVisible();
    await expect(homePage.navMenu).toBeVisible();
    await expect(homePage.heroBanner).toBeVisible();
    await expect(homePage.footer).toBeVisible();
  });

  test('Navigation link works correctly', async ({ page }) => {
    await homePage.goto();
    
    await homePage.loginLink.click();
    
    await expect(page).toHaveURL(/.*login/); 
  });
});
