import{test,expect}from '@playwright/test'

test('DropdownList ', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/dropdown');
 // await page.getByRole('button',{name:'Create new account'}).click();
  // dropdown using value
  
  await page.locator("//select[@id='dropdown']").click();
await page.locator("//select[@id='dropdown']").selectOption('Option 1');
  await expect(page.locator("//select[@id='dropdown']")).toHaveText(['Please select an option','Option 1','Option 2',]);
});






  