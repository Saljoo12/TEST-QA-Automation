import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

// Memuat file .env
dotenv.config();

export default defineConfig({
  testDir: './tests',
  // Menjalankan test secara paralel (Bonus)
  fullyParallel: true,
  // Retry jika test gagal/flaky (Bonus)
  retries: 2,
  workers: process.env.CI ? 1 : undefined,
  // Konfigurasi Report (HTML & JUnit)
  reporter: [
    ['html'],
    ['junit', { outputFile: 'results/results.xml' }]
  ],
  use: {
    // Environment variable untuk Base URL (Bonus)
    baseURL: process.env.BASE_URL || 'https://fe-stage.fuomo.id',
    // Screenshot otomatis saat test gagal (Bonus)
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },

  // Konfigurasi Viewport (Desktop & Mobile - Scenario 4)
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
});