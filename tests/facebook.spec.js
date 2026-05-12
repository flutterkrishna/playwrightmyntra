//locator

//in general locator ->id,class,xplath,css
//in build locator -> page.locator('locator')
//1.getByTestId() -> data-testid
//2.getByText() -> text
//3.getByRole() -> role
//4.getByLabel() -> label
//5.getByPlaceholder() -> placeholder
//6.getByAltText() -> alt
//7.getByTitle() -> title

import {test} from '@playwright/test';
test('locator', async ({page}) => { 
    await page.goto('https://www.facebook.com/');    
   // const searchBar =await  page.locator('input#twotabsearchtextbox');
    //await searchBar.fill('laptops');
    const emailField = page.locator('//input[@name="email"]');
     await emailField.fill('test@example.com');
    const passwordField=page.locator('//input[@name="pass"]');           
     await  passwordField.fill("password@123");
     await page.locator('//span[text()="Log in"]').click(); 
     await page.waitForTimeout(5000);
     await page.screenshot({path: 'screenshot.png'});  

})            



