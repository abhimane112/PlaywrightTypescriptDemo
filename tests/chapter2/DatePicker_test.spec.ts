import { test, expect } from '@playwright/test';

test('DatePicker', async ({ page }) => {
   await page.goto('https://jqueryui.com/datepicker/');

const iframe= page.frameLocator('[class=demo-frame]');
await iframe.locator('[id=datepicker]').click();

//await iframe.locator('.ui-datepicker-today').click();

// await iframe.locator('[data-handler="prev"]').click();
// await iframe.locator('text="12"').click();
console.log("Run using github");
await iframe.locator('[data-handler="next"]').click();
await iframe.locator('text="12"').click();

});