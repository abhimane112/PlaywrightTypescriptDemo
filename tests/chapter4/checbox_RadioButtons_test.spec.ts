import{test,expect}from '@playwright/test'

test('Iteration in playwright', async ({ page }) => {

  await page.goto('https://jqueryui.com/checkboxradio/');

  const iframe= await page.frameLocator('[class="demo-frame"]');
 await expect(iframe.locator('[for="radio-1"]')).not.toBeChecked();
 await iframe.locator('[for="radio-1"]').check();
 await expect(iframe.locator('[for="radio-1"]')).toBeChecked();


 await expect(iframe.locator('[for="checkbox-2"]')).not.toBeChecked();
 await iframe.locator('[for="checkbox-2"]').check();
 await expect(iframe.locator('[for="checkbox-2"]')).toBeChecked();
});
