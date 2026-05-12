import{test} from '@playwright/test';
import { time } from 'node:console';

test('locator', async ({ page }) => {
  await page.goto('https://in.bookmyshow.com/explore/home/chennai');   
  await page.locator('//button[@aria-label="Sign in"]').click();
const input = page.locator('//input[@placeholder="Continue with mobile number"]');

await input.fill('9123457890');
await page.locator('//button[@ aria-label="Continue"]').click();  
   await page.waitForTimeout(5000);

});

