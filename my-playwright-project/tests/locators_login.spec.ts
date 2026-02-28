import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  // Assert URL
  await expect(page).toHaveURL(/inventory.html/);

// Assert heading
  await expect(page.locator('[data-test="title"]'))
    .toHaveText('Products');

// Assert product count
  await expect(page.locator('.inventory_item'))
    .toHaveCount(6);
});