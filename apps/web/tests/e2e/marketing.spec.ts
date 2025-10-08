import { test, expect } from '@playwright/test';

test('marketing page renders in English', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Permit compliance/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /Request Demo/ })).toBeVisible();
});
