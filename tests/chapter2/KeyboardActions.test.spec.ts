import { test, expect } from '@playwright/test';

test('Keyboard Actions', async ({ page }) => {
   await page.goto('https://www.youtube.com/');

   // keyboard Action 
  await page.getByRole('combobox', { name: 'Search' }).first().click();
//   await page.getByRole('combobox', { name: 'Search' }).first().fill('Testers talk playwright');
//  await page.getByRole('combobox', { name: 'Search' }).first().press('Enter');
  
//Selecting Deleting

// await page.getByRole('combobox', { name: 'Search' }).first().fill('Testers talk playwright');
//  await page.keyboard.press('Control+A');
//  await page.keyboard.press('Delete');

// tab and Enter
await page.keyboard.press('Tab');
await page.keyboard.press('Enter');

});