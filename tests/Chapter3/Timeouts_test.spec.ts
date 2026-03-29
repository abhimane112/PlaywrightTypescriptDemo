import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    test.setTimeout(1*60*1000);
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).click({timeout:5000});
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('abhishek');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('abcd');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByText('Incorrect username or').click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});