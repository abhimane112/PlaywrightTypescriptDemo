import{test,expect}from '@playwright/test'
test('My First Test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).fill('testers talk Playwright');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
  

  await page.getByRole('link', { name: '#1 Playwright Tutorial Full' }).click();
  await expect(page.locator('video')).toBeVisible();
  await page.getByRole('link', { name: '#2 Playwright API Testing' });
  await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
  
  await expect(page.locator('ytd-playlist-video-list-renderer')).toContainText('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial');
  await expect(page.locator('ytd-playlist-video-list-renderer')).toContainText('#2 Playwright API Testing Tutorial Crash Course 2024');
  
});






  