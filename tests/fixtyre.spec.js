import { test, chromium } from '@playwright/test';

test('handling dropdown and record video', async () => {

    // launch browser
    const browser = await chromium.launch({
        headless: false
    });

    // create context
    const context = await browser.newContext({
        viewport: null,

        recordVideo: {
            dir: 'records/'
        }
    });

    // create page
    const page = await context.newPage();

    // demo dropdown website
    await page.goto('https://testautomationpractice.blogspot.com/');

    // select by value
    await page.selectOption('#country', {
        value: 'india'
    });

    await page.waitForTimeout(2000);

    // select by label
    await page.selectOption('#country', {
        label: 'Japan'
    });

    await page.waitForTimeout(2000);

    // select by index
    await page.selectOption('#country', {
        index: 3
    });

    await page.waitForTimeout(2000);

    // close page/context/browser
    await page.close();
    await context.close();
    await browser.close();
});