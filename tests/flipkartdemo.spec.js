
import{test} from '@playwright/test';

test('Flipkart banner handling', async ({ page, browserName }) => {
  await page.goto('https://www.flipkart.com');

  // Condition based on browser
  if (browserName === 'webkit') {
    console.log('Running in WebKit');

    // Example: banner close button
    const bannerClose = page.locator('button._2KpZ6l._2doB4z');

    if (await bannerClose.isVisible()) {
      await bannerClose.click();
    }
  }

  if (browserName === 'chromium') {
    console.log('Running in Chromium');
    // Chromium-specific logic
  }

  if (browserName === 'firefox') {
    console.log('Running in Firefox');
    // Firefox-specific logic
  }
});