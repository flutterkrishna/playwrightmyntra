import{test} from '@playwright/test';
import { time } from 'node:console';

test('locator', async ({ page }) => {
  await page.goto('https://www.amazon.in/');   
  //await page.locator('//div[@class="nav-line-1-container"]//span[text()="Hello, sign in"]').click();
  //const input = page.locator('//input[@aria-label="Enter mobile number or email"]');

//await input.fill('00000000000');
//await input.click(); // optional (usually not needed after fill)


//await page.locator('//input[@aria-label="Enter mobile number or email"]').fill('00000000000');

//await page.getByRole('button', { name: 'Continue' }).click();
  

   await page.waitForTimeout(5000);

});