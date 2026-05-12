
/*** 
import {test} from '@playwright/test';
//previous const {test} = require('@playwright/test');
//async -aprallel test
//await handle asynchrous
//page -to tab -inbuild fuser
test('launching browser', async ({page}) => {
  await page.goto('https://www.facebook.com');
  await page.waitForTimeout(5000);
  await page.goto('https://www.instagram.com');
  await page.waitForTimeout(5000);
  //await page.goBack();
  //await page.goForward();
  await page.reload();

});

***/

import {test} from '@playwright/test';
/** 
test('locator', async ({page}) => { 
    await page.goto('https://www.jio.com/selfcare/login/');    
    const searchBar =await  page.locator('input#inputField');
    await searchBar.fill('0000000000');
    await page.waitForTimeout(5000);

})
**/




test('Myntra Kids Product Count', async ({ page }) => {

  await page.goto('https://www.myntra.com');

  // Hover Kids
  //await page.locator('a.desktop-main:has-text("Kids")').hover();
    await page.locator('//a[@data-group="kids"]').hover();

  // Click Boys T-Shirts
  //await page.locator('li:has-text("Boys Clothing") a:has-text("T-Shirts")').click();
  await page.locator('//a[@href="/boy-tshirts"]').click();

  // Wait for products
  await page.waitForSelector("//ul[@class='results-base']");

  // Count products
  const count = await page.locator("//li[@class='product-base']").count();
  console.log("Product count:", count);

  // Get all original prices
  //const prices = page.locator('.product-discountedPrice');
const productTitles = page.locator('//li[@class="product-base"]//h3[@class="product-brand"]'); 
const prices = page.locator('//li[@class="product-base"]//span[@class="product-discountedPrice"]');

let total = await prices.count();
let productCount = await productTitles.count();

console.log('Total products with NAME:', productCount);
console.log('Total products with price:', total);

let lowestPrice = Infinity;
let lowestProductName = '';

for (let i = 0; i < total; i++) {

  let priceText = await prices.nth(i).textContent();
  let productName = await productTitles.nth(i).textContent(); 
  if (priceText && productName) {

    let price = parseInt(priceText.replace(/[^0-9]/g, ''));

    console.log(`${priceText}`);
    console.log(`${productName}`);

    if (price < lowestPrice) {
      lowestPrice = price;
      lowestProductName = productName;
    }
  }
}

console.log('Lowest Price:', lowestPrice);
console.log('Lowest Product Name:', lowestProductName);
  console.log(`${lowestProductName} : ${lowestPrice}`);
});
// headless -without UI
//headful -with UI



