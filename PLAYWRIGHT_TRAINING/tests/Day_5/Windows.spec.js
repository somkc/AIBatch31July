import {chromium, expect, test} from '@playwright/test'

test('new windows',async({})=>{
const browser=await chromium.launch();
const context = await browser.newContext();
const page1= await context.newPage();
const page2= await context.newPage();
await page1.goto("https:www.google.com");
await page1.pause();
await page2.goto("http:www.bing.com");
await page1.waitForTimeout(3000);

})
test.only("window element click",async({page})=>{
await page.goto("https://login.salesforce.com/?locale=in");
const win=page.context().waitForEvent('page');//capture even new window is open
await page.locator("#privacy-link").click();
const newPage=await win;// store new page
console.log(await newPage.title());
await newPage.locator("//a[normalize-space()='See Privacy Statement']").isVisible()

})