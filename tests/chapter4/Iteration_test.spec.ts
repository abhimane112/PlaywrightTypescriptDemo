import{test,expect}from '@playwright/test'

test('Iteration in playwright', async ({ page }) => {

  await page.goto('https://jqueryui.com/droppable/');
 
  const Alllinks=await page.$$('.menu-item');
  for (const links of Alllinks) {
    const Menu=await links.textContent();
    console.log(`Text from first for loop : ${Menu}`);
}
  
 console.log(`===============================================`);

 for (let index = 0; index < Alllinks.length; index++) {
    const text = await Alllinks[index].textContent();
    console.log(`Text from 2nd for loop :${text}`);
 }
console.log(`===============================================`);

const AllTexts= await page.locator('.menu-item');
const texts =await AllTexts.count();
for (let index = 0; index < texts; index++) {
  const text= await AllTexts.nth(index).textContent();
  console.log(`Text from 3rd for loop :${text}`);
 }

console.log(`===============================================`);

});
