import{test,expect}from '@playwright/test'

test('Text attribute , textContext ', async ({ page }) => {

  await page.goto('https://jqueryui.com/droppable/');
 
  const text=await page.getByText('Interactions').first().innerText();
  // const text=await page.getByText('Interactions').first().textContent();
  const OrgTextName= text?.trim();
  console.log(`Name is : ${OrgTextName}`);

  const attribute=await page.getByTestId('Droppable | jQuery UI').getAttribute('title');
  console.log(`Name is : ${attribute}`);
});
