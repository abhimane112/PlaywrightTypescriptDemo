import{test,expect}from '@playwright/test'
test('Alert Handling', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Alerts.html');


  page.once('dialog', dialog=> {
dialog.accept();
console.log(`Alert Message:${dialog.message()}`)
  })
  await page.getByText('click the button to display an  alert box:',{exact:true}).click();
  
});

test('Popup Handling', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Alerts.html');


  page.once('dialog', dialog=> {
dialog.accept();
console.log(`Alert Message:${dialog.message()}`)
  })

  await page.getByText('Alert with OK & Cancel',{exact:true}).click();
  await page.getByText('click the button to display a confirm box',{exact:true}).click();
  
});

test('Popup prompt Handling', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Alerts.html');


  page.once('dialog', dialog=> {
dialog.accept('Abhishek');
console.log(`Alert Message:${dialog.message()}`)
  })

  await page.getByText('Alert with Textbox ',{exact:true}).click();
  await page.getByText('click the button to demonstrate the prompt box ',{exact:true}).click();
  
});