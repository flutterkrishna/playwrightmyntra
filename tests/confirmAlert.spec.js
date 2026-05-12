

test.only('confirmAlert', async ({ page }) => {

    const browser= await webitkit.launch({
        headless: true,
        devtools: true
    }); 
    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_alert');
    await page.fill();
    aw

});