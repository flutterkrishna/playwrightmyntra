import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('mobiles');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('slider', { name: 'Maximum price' }).fill('90');
  //await page.locator('.puisg-col.puisg-col-4-of-4.puisg-col-4-of-8.puisg-col-4-of-12.puisg-col-4-of-16.puisg-col-8-of-20 > .puisg-col-inner').first().click();
  await page.getByRole('slider', { name: 'Maximum price' }).fill('61');
  //await page.locator('.a-section.s-range-input-container.s-upper-bound').click();
});