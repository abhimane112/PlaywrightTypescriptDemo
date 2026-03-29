
import { test, expect } from '@playwright/test';

const SerachKeywords=['Playwright by Testers Talk','Cypress by Testers Talk']
for (const keyword of SerachKeywords) {
 test(`para in playwright ${keyword}`, async ({ page }) => {
   await page.goto('https://www.youtube.com/');

   

 //ToHave Url, to Have Text, to haveTitle
await page.getByPlaceholder('Search', {exact:true}).first().click();
await page.getByPlaceholder('Search', {exact:true}).first().fill(keyword);
await page.getByPlaceholder('Search', {exact:true}).first().press('Enter');
// await expect(page).toHaveURL('https://www.youtube.com/results?search_query=testers+talk+playwright');
await expect(page).toHaveTitle(keyword+' - YouTube');
await expect(page.locator('[title="Playwright by Testers Talk ✅"]').first()).toHaveText(keyword+' ✅');
});


}
