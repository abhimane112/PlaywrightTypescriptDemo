//import{test,expect}from '@playwright/test'
import{test} from '../../src/fixture/TestFixture';
import { HomePage } from '../../src/pages/HomePage';
import { ResultPage } from '../../src/pages/ResultPage';
import { PlaylistPage } from '../../src/pages/PlaylistPage';
test('page Object Model', async ({ page }) => {
  
    const homePage= new HomePage(page);
    await homePage.goToURL();
    await homePage.searchWithkeywords(`${process.env.SEARCH_KEYWORDS}`);

    const resultPage= new ResultPage(page);
await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORDS}`);

 const playlistPage= new PlaylistPage(page);
await playlistPage.validatePageTitle(`${process.env.SEARCH_KEYWORDS} ✅ - YouTube`);
});






  