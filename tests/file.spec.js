//file input path: tests/file.spec.js

//file upload and download
import { test } from '@playwright/test';







test('file upload and download', async ({ page }) => {
  await page.goto('https://www.dropzone.dev/');

  //await page.setInputFiles(
   // 'input[id="uploadPicture"]',
   // 'C:/Users/krish/Downloads/Cheerful boy giving a thumbs-up.png'
 // );


 await page.setInputFiles('input[type="file"]', [
  'C:/Users/krish/Downloads/Cheerful boy giving a thumbs-up.png',
  'C:/Users/krish/Downloads/Cute cartoon animal collection.png'
]);
});

/*** 

test('upload and download', async ({ page }) => {
  await page.goto('https://demoqa.com/upload-download');

  const filePath = 'C:/Users/krish/Downloads/Cheerful boy giving a thumbs-up.png';

  // ✅ Upload (correct locator)
  await page.setInputFiles('#uploadFile', filePath);

  // ✅ Download using Promise
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click('#downloadButton')
  ]);

  // ✅ Save file
   const path =await download.path();
   console.log('Downloaded file path:', path);
});

***/



//singlefile
//setInputFike('locator','path');
//setInputFiles('input[type="file"]', 'path/to/file.txt');)

//to upload multiplefiles
//await page.setInputFiles('input[type="file"]', ['path/to/file1.txt', 'path/to/file2.txt']); 

//to download a file
//empty array to capture download event
//setInputFiles('input[type="file"]', []);->to clearthe file input

