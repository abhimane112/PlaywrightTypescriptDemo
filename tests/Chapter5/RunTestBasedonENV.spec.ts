
// import{test,expect}from '@playwright/test'
// import { HomePage } from '../../src/pages/HomePage';
// import { ResultPage } from '../../src/pages/ResultPage';
// import { PlaylistPage } from '../../src/pages/PlaylistPage';

import { test } from '../../src/fixture/TestFixture';
test('page Object Model', async ({ page, homePage, resultPage, playlistPage,testData }) => {


    await homePage.goToURL();
    await homePage.searchWithkeywords(String(testData.Module1testData?.skill1));
    await resultPage.clickOnPlaylist(String(testData.Module1testData?.skill1));
    await playlistPage.validatePageTitle(String(testData.Module1testData?.skill1)+'✅ - YouTube');

    console.log(`skill : ${String(testData.Module1testData?.skill1)}`)
    console.log(`skill : ${String(testData.Module1testData?.skill2)}`)
    console.log(`skill : ${String(testData.Module1testData?.skill3)}`)

});







