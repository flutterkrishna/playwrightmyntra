import{test} from '@playwright/test';



test('locator', async ({ page }) => {
  await page.goto('https://www.airbnb.co.in/');
//  await page.locator('button[aria-label="Main navigation menu"]').click();
//await page.getByText('Log in or sign up').click();
await page.locator('//span[text()="Available in Puducherry this weekend"]').scrollIntoViewIfNeeded();
//span[text()="Available in Puducherry this weekend"]

await page.waitForTimeout(5000);


});