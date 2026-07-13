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
    this.logo = page.locator('.logo'); 
    this.navMenu = page.locator('nav'); 
    this.heroBanner = page.locator('.hero-section'); 
    this.footer = page.locator('footer');
    this.loginLink = page.locator('a:has-text("Login")'); 
  }

  async goto() {
    const response = await this.page.goto('/');
    return response;
  }
}
