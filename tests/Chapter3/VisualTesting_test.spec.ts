import { test, expect } from '@playwright/test';

test('Visual testing', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await expect(page).toHaveScreenshot('GithubLogin.png');

   await page.locator('#login_field').fill('Abhi');
   await expect(page).toHaveScreenshot('GithubLogin.png');


});

// test('element testing', async ({ page }) => {
//   await page.goto('https://github.com/');
//   await page.getByRole('link', { name: 'Sign in' }).click();

//   const element=page.locator('authentication-body authentication-body--with-form new-session');
//   await expect(element).toHaveScreenshot('GithubLoginForm.png');
// });
