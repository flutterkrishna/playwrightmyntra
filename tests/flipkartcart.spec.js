import{test} from '@playwright/test';



test('locator', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('button', { name: /close|✕/i }).click();
await page.getByPlaceholder('Search for Products, Brands and More')
          .first()
          .fill('toys');
await page.keyboard.press('Enter');
await page.locator('//a[text()="TOOBIL JUNGLE THEME PLAY TENT HOUSE"]').first().click();
//await page.pause();


await page.waitForTimeout(8000);

});