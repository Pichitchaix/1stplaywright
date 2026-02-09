import { test, expect } from '@playwright/test';

test.describe('Todo App', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');
  });

  test('should add a new todo item', async ({ page }) => {

    const todoText = 'Learn Playwright';

    await page.getByPlaceholder('What needs to be done?').fill(todoText);
    await page.keyboard.press('Enter');

    const todoItem = page.getByTestId('todo-title').filter({ hasText: todoText });

    await expect(todoItem).toBeVisible();
  });

  test('should mark todo as completed', async ({ page }) => {

    const todoText = 'Buy groceries';

    await page.getByPlaceholder('What needs to be done?').fill(todoText);
    await page.keyboard.press('Enter');

    const todoItem = page.getByTestId('todo-item').filter({ hasText: todoText });

    await todoItem.getByRole('checkbox').check();

    await expect(todoItem).toHaveClass(/completed/);
  });

});
