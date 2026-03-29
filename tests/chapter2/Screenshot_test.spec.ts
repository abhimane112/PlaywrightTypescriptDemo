import { test, expect } from '@playwright/test';

test('Capture Screenshot in playwright', async ({ page }) => {
  await page.goto('https://www.youtube.com/@testerstalk');
  
  //Element screenshot
  await page.locator('#page-header-container').screenshot({path:'./Screenshots/ElementScreenshot.png'})


// Page Screenshot
await page.screenshot({path:'./Screenshots/PageScreenshot.png'})

//FullPage Screenshot
await page.screenshot({path:'./Screenshots/FullPageScreenshot.png', fullPage:true})

});