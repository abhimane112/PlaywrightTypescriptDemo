import{test,expect}from '@playwright/test'
test('My First Test', async ({ page }) => {
  await page.goto(`${process.env.GOOGLE_URL}`);
  await page.getByRole('combobox', { name: 'Search' }).fill('testers talk Playwright');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
  

});


