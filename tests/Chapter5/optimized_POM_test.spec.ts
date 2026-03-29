// import{test,expect}from '@playwright/test'
// import { HomePage } from '../../src/pages/HomePage';
// import { ResultPage } from '../../src/pages/ResultPage';
// import { PlaylistPage } from '../../src/pages/PlaylistPage';

import { test } from '../../src/fixture/TestFixture';
test('page Object Model', async ({ page, homePage, resultPage, playlistPage }) => {


    await homePage.goToURL();
    await homePage.searchWithkeywords(`${process.env.SEARCH_KEYWORDS}`);
    await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORDS}`);
    await playlistPage.validatePageTitle(`${process.env.SEARCH_KEYWORDS} ✅ - YouTube`);
});






