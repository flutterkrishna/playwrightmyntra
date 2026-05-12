//html dropdown site go

//testautomation site go

test('handling dropdown and record video',async({})=>{

//In built fixtures
//browser
//context
//page

//use headless and viewport inbuilt fixtures to launch the browser in headed mode and set viewport to null


//context is like a tab in the browser
//page is like a page in the tab a window in the page
//context screenshot folder create a folder with the name of the test and store the screenshots in that folder  

const browser = await chromium.launch({headless:false,viewport:null});
const context = await browser.newContext({
    recordVideo:{
        dir:'records/',

    }
});
const  page = await context.newPage();

//dropdown particular option select  is tagname select,div mostly
//selectOptions()->handle dropdown
await page.goto('https://www.ixigo.com/');

await page.selectOption('#course',{value:'btech'});

await page.waitForTimeout(5000);

await page.selectOption('#course',{label:'B.Tech'});

await page.waitForTimeout(5000);

await page.selectOption('#course',{index:1});

await page.waitForTimeout(5000);        

await page.selectOption('#course',['ec','ij','vs']);
await page.waitForTimeout(5000); 



})