import { test, expect } from '@playwright/test';

test('Assertions in playwright', async ({ page }) => {
   await page.goto('https://www.youtube.com/');

   // to be enabled, disabled, empty, visible
//   await expect(page.getByPlaceholder('Search').first()).toBeEnabled;
//    await expect.soft(page.getByPlaceholder('aSearch').first()).toBeEmpty;
//     await expect(page.getByPlaceholder('Search').first()).toBeVisible;
//  await expect(page.getByPlaceholder('Search').first()).toBeEmpty;


 //ToHave Url, to Have Text, to haveTitle
await page.getByPlaceholder('Search', {exact:true}).first().click();
await page.getByPlaceholder('Search', {exact:true}).first().fill('testers talk playwright');
await page.getByPlaceholder('Search', {exact:true}).first().press('Enter');
await expect(page).toHaveURL('https://www.youtube.com/results?search_query=testers+talk+playwright');
await expect.soft(page).toHaveTitle('testers talk playwright - YouTube');
await expect(page.locator('[title="Playwright by Testers Talk ✅"]').first()).toHaveText('Playwright by Testers Talk ✅');
});

