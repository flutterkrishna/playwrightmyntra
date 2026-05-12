import { test, expect } from '@playwright/test';

test('handle all dialog types', async ({ page }) => {

  await page.goto('https://demoqa.com/alerts'); // replace

  // Handle all dialogs
  page.on('dialog', async (dialog) => {

    const type = dialog.type();
    const message = dialog.message();

    console.log('Type:', type);
    console.log('Message:', message);

    if (type === 'alert') {
      await dialog.accept();
    }


    else if (type === 'confirm') {
      await dialog.accept(); 
    }

  
    else if (type === 'prompt') {
      await dialog.accept('Hello Krishna'); // send text
    }
  });

  
  await page.locator('#alertButton').click();
await page.waitForTimeout(5000); 
 
  await page.locator('#timerAlertButton').click();
await page.waitForTimeout(5000); 

   await page.locator('#confirmButton').click();
await page.waitForTimeout(5000); 
  await page.locator('#promtButton').click();
await page.waitForTimeout(5000); 
});