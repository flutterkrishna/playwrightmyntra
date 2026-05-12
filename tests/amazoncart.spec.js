import{test} from '@playwright/test';



test('locator', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
await page.getByPlaceholder('Search Amazon.in').fill('mobile phones');
await page.keyboard.press('Enter');
//await page.pause();


await page.waitForTimeout(8000);

});