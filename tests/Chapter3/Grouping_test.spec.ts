import { test, expect } from '@playwright/test';

test.describe('Smoke Testing',()=>{
test('Test1', async ({ page }) => {
    // await page.goto('https://www.youtube.com/results?search_query=testers+talk+playwright');

    //By role
    //   await page.getByRole('link',({name:'search'})).first().click();

    //By label
    // await page.getByLabel('Search with your voice',{exact:true}).first().click();

    //By alt attribute
    // await page.getByAltText("ytCoreImageHost yt-spec-avatar-shape__image ytCoreImageFillParentHeight ytCoreImageFillParentWidth ytCoreImageContentModeScaleToFill ytCoreImageLoaded")

    //By TestId 
    // await page.getByTestId("Posts").first().click();

    // By Text
    // await page.getByText("Home").click();
    
    // By Placeholder
    // await page.getByPlaceholder("Search").fill("Abhishek");

    //By Xpath
    // await page.locator("//input[@name='search_query']").fill("Abhishek");
  await page.goto('https://www.google.com/');

  //By title
  await page.getByTitle("Search").fill("Abhishek");
});
});

test.describe('Regression Testing', ()=>{
test('Test2', async ({ page }) => {
    // await page.goto('https://www.youtube.com/results?search_query=testers+talk+playwright');

    //By role
    //   await page.getByRole('link',({name:'search'})).first().click();

    //By label
    // await page.getByLabel('Search with your voice',{exact:true}).first().click();

    //By alt attribute
    // await page.getByAltText("ytCoreImageHost yt-spec-avatar-shape__image ytCoreImageFillParentHeight ytCoreImageFillParentWidth ytCoreImageContentModeScaleToFill ytCoreImageLoaded")

    //By TestId 
    // await page.getByTestId("Posts").first().click();

    // By Text
    // await page.getByText("Home").click();
    
    // By Placeholder
    // await page.getByPlaceholder("Search").fill("Abhishek");

    //By Xpath
    // await page.locator("//input[@name='search_query']").fill("Abhishek");
  await page.goto('https://www.google.com/');

  //By title
  await page.getByTitle("Search").fill("Abhishek");
});

test('Test3', async ({ page }) => {
    // await page.goto('https://www.youtube.com/results?search_query=testers+talk+playwright');

    //By role
    //   await page.getByRole('link',({name:'search'})).first().click();

    //By label
    // await page.getByLabel('Search with your voice',{exact:true}).first().click();

    //By alt attribute
    // await page.getByAltText("ytCoreImageHost yt-spec-avatar-shape__image ytCoreImageFillParentHeight ytCoreImageFillParentWidth ytCoreImageContentModeScaleToFill ytCoreImageLoaded")

    //By TestId 
    // await page.getByTestId("Posts").first().click();

    // By Text
    // await page.getByText("Home").click();
    
    // By Placeholder
    // await page.getByPlaceholder("Search").fill("Abhishek");

    //By Xpath
    // await page.locator("//input[@name='search_query']").fill("Abhishek");
  await page.goto('https://www.google.com/');

  //By title
  await page.getByTitle("Search").fill("Abhishek");
});
});

