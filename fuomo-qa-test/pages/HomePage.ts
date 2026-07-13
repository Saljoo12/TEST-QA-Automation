import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly navMenu: Locator;
  readonly heroBanner: Locator;
  readonly footer: Locator;
  readonly loginLink: Locator;

  constructor(page: Page) {
    this.page = page;
    // PENTING: Kamu harus inspect element web aslinya untuk mengganti locator di bawah ini
    this.logo = page.locator('.logo'); // Ganti dengan class/id logo yg asli
    this.navMenu = page.locator('nav'); // Ganti dengan locator navigasi yg asli
    this.heroBanner = page.locator('.hero-section'); // Ganti dengan locator banner
    this.footer = page.locator('footer');
    this.loginLink = page.locator('a:has-text("Login")'); // Contoh link navigasi
  }

  async goto() {
    // Akan otomatis menggunakan BASE_URL dari .env
    const response = await this.page.goto('/');
    return response;
  }
}