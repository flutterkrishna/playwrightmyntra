import { test, webkit } from '@playwright/test';

test.only('confirmAlert', async () => {

    // launch browser
    const browser = await webkit.launch({
        headless: false
    });

    // create context
    const context = await browser.newContext();

    // create page
    const page = await context.newPage();

    // open url
    await page.goto('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_alert');

    // handle alert
    page.on('dialog', async dialog => {

        console.log(dialog.message());

        await dialog.accept();
    });

    // switch to iframe
    const frame = page.frameLocator('#iframeResult');

    // click button
    await frame.locator('button').click();

    await page.waitForTimeout(3000);

    await browser.close();
});