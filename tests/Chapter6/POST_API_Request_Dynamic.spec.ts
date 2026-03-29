import{test,expect}from '@playwright/test'

import { formatAPIRequest } from '../../src/utils/APIHelper';
import path from 'path';
import fs from 'fs';

test.use({
    baseURL:process.env.BASE_API_URL,
})
test('Create POST APi Request using Dynamic', async ({ request }) => {
  
   const filePath= path.join(__dirname,'../../test-data/api_rquests/Dynamic_POST_API_Request.json');
   const jsonTemplate=fs.readFileSync(filePath,'utf-8');

   const values=['Playwright by Testers Talk','Cypress by Testers Talk',1000];

   const postAPIRequest= await formatAPIRequest(jsonTemplate,values);
    const postApiResponse=await request.post(`/booking`,{data:JSON.parse(postAPIRequest)});

    const jsonapostApiResponse=await postApiResponse.json();
    console.log(`Post Api Response : `+JSON.stringify(jsonapostApiResponse,null,2));
});






  