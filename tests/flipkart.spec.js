import { test } from '@playwright/test';

test('locator', async ({ page }) => {
  
  await page.goto('https://www.flipkart.com/');

  // Wait for page load
  
await page.getByRole('button', { name: /close|✕/i }).click();


// await page.screenshot({path:'screenshot.png'}); 

//a[@aria-label="Login"]


await  page.locator('//a[@aria-label="Login"]').click();
const input = page.locator('form').filter({ hasText: 'Enter Email/Mobile number' })
  .locator('input');

await input.fill('0000000000');
await page.waitForTimeout(8000);

});

//singlefile
//setInputFike('locator','path');
//setInputFiles('input[type="file"]', 'path/to/file.txt');)

//to upload multiplefiles
//await page.setInputFiles('input[type="file"]', ['path/to/file1.txt', 'path/to/file2.txt']); 

//to download a file
//empty array to capture download event
//setInputFiles('input[type="file"]', []);->to clearthe file input



//download a file(waitforEvent)
//waitforEvent('download'));
//wait for event
//const download =await Promeise.all([
//page.waitForEvent('download'),
//page.click('locator')
//]);




