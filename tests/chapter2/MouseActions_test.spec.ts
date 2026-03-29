import{test,expect}from '@playwright/test'

test('Mouse Action in Playwright', async ({ page }) => {

  await page.goto('https://www.youtube.com/results?search_query=testers+talk+playwright');
 
// left click
//  await page.getByRole('link',{name:'auto'}).first().click({button:'left'});

  // Middle click
 // await page.getByRole('link',{name:'auto'}).first().click({button:'middle'});

  // right click
  //await page.getByRole('link',{name:'auto'}).first().click({button:'right'});

  // Hover
  await page.getByLabel('Search with your voice').hover();
  
  //double click
await page.getByLabel('Search with your voice').dblclick();
  
});
