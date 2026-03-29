import{test,expect}from '@playwright/test'
import { log } from 'node:console';

test.beforeAll(async()=>{
console.log('Running before All test..');
});

test.beforeEach(async({page})=>{
console.log('Running before each test..');
await page.goto('https://www.google.com/');
});

test.afterEach(async()=>{
console.log('Running after each test..');
});

test.afterAll(async()=>{
console.log('Running After All test..');
});

test('Test 1', async ({ page }) => {
    console.log('test 1 execution started');
//   await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).fill('testers talk Playwright');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  
  });

  test('Test 2', async ({ page }) => {
     console.log('test 2 execution started');
//   await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).fill('testers talk Playwright');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  
  });






  