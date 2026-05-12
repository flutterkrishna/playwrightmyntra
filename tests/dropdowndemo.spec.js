import{test} from '@playwright/test';


test('locator', async ({ page }) => {
  await page.goto('https://demoqa.com/radio-button');  
  //await page.locator('#cars').scrollIntoViewIfNeeded();
  //await page.selectOption('#cars',['Volvo','Saab','Opel','Audi']); 
 // await page.selectOption('#course',{value:'java'}); 
  await page.locator('label[for="yesRadio"]').click();
   await page.waitForTimeout(5000);

});