import{test,expect}from '@playwright/test'

import { parse } from 'csv-parse/sync';
import * as nodeFs from 'fs';
import path from 'path';

type testRecords={
  skill1: string,
  skill2: string
}

const records= parse(
  nodeFs.readFileSync(path.join(__dirname,'../../test-data/qa/testdata.csv')),
  {
    columns:true,
    skipEmptyLines: true
  }
) as testRecords[];
for (const record of records) {
  test(`Data driven using csv : ${record.skill1}`, async ({ page }) => {
  await page.goto(`${process.env.GOOGLE_URL}`);
  await page.getByRole('combobox', { name: 'Search' }).fill(record.skill2);
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
 // await page.getByRole('link', { name: record.skill1 }).first().click();
  

});
}



