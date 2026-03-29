import{test,expect}from '@playwright/test'
test('My First Test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: '#1 Playwright Tutorial Full' }).first().click();
  await expect(page).toHaveTitle('Playwright by testers Talk: YouTube');
});






  