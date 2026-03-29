import{test,expect}from '@playwright/test'

import postAPIRequest from '../../test-data/api_rquests/POST_API_Request.json';

test.use({
    baseURL:process.env.BASE_API_URL,
})
test('Create POST APi Request', async ({ request }) => {
  
    const postApiResponse=await request.post(`/booking`,{data:postAPIRequest});

    const jsonapostApiResponse=await postApiResponse.json();
    console.log(`Post Api Response : `+JSON.stringify(jsonapostApiResponse,null,2));
});






  