import{test,expect}from '@playwright/test'
test('Browsers  Context', async ({ page, browser }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  

  const Context2=await browser.newContext();
  const page2=await Context2.newPage();

 await page2.goto('https://www.google.com/');
  await page2.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers');
  await page2.getByRole('combobox', { name: 'Search' }).press('Enter');
 

  // create new tabs
  const newtabs=await Context2.newPage();
await newtabs.goto('https://www.google.com/');
  await newtabs.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers');
  await newtabs.getByRole('combobox', { name: 'Search' }).press('Enter');
});






  