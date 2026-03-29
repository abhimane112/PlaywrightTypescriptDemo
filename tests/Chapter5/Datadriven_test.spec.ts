import{test,expect}from '@playwright/test'
import testData from '../../test-data/qa/testdata.json';

type TestData={
    TestData1:{
    Skill1:string,
     Skill2:string
},

TestData2:{
    Skill1:string,
     Skill2:string
},

}

const typedtestData=testData as TestData;
for (const dataSetName in typedtestData) {
  const skill= typedtestData[dataSetName as keyof TestData] 


test(`Data driven using Json : ${skill.Skill1}`, async ({ page }) => {
  await page.goto(`${process.env.GOOGLE_URL}`);
  await page.getByRole('combobox', { name: 'Search' }).fill(skill.Skill1);
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: skill.Skill1 }).first().click();
  

});
}