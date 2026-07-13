import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Fuomo Homepage Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });

  // Scenario 1 – Page Loads Successfully
  test('Homepage loads successfully with status 200 and title', async ({ page }) => {
    const response = await homePage.goto();
    
    // Verifikasi HTTP response status 200
    expect(response?.status()).toBe(200);
    
    // Verifikasi title tidak kosong
    const title = await page.title();
    expect(title).not.toBe('');
  });

  // Scenario 2 – Validasi Elemen UI Utama
  test('Main UI elements are visible', async () => {
    await homePage.goto();
    
    await expect(homePage.logo).toBeVisible();
    await expect(homePage.navMenu).toBeVisible();
    await expect(homePage.heroBanner).toBeVisible();
    await expect(homePage.footer).toBeVisible();
  });

  // Scenario 3 – Navigation Link Berfungsi
  test('Navigation link works correctly', async ({ page }) => {
    await homePage.goto();
    
    // Klik menu navigasi (misal: tombol/link Login atau About)
    await homePage.loginLink.click();
    
    // Verifikasi halaman berpindah (sesuaikan URL ekspektasinya)
    await expect(page).toHaveURL(/.*login/); 
  });
});