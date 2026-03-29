import{test,expect}from '@playwright/test'

import path from 'path';
import { readExcelFile } from '../../src/utils/ExcelHelper';

const filePath=path.join(__dirname,'../../test-data/qa/TestData.xlsx');

const records= readExcelFile(filePath);

for (const record of records) {
  test(`Data driven using Excel : ${record.skill1}`, async ({ page }) => {
  await page.goto(`${process.env.GOOGLE_URL}`);
  await page.getByRole('combobox', { name: 'Search' }).fill(record.skill1);
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
 // await page.getByRole('link', { name: record.skill1 }).first().click();
  

});
}



