import { expect,test } from "@playwright/test";
test('frames',async({page})=>{
await page.goto("https://demo.automationtesting.in/Frames.html");
const frames=await page.frames();
console.log(await frames.length );
await page.frameLocator("#singleframe").locator("//input[@type='text']").fill("testing");
await page.waitForTimeout(3000);

})

test.only('inner frames',async({page})=>{
await page.goto("https://demo.automationtesting.in/Frames.html");
await page.locator("//a[normalize-space()='Iframe with in an Iframe']").click();
const frame1= page.frameLocator("iframe[src='MultipleFrames.html']");
const frame2=frame1.frameLocator("iframe[src='SingleFrame.html']");
await frame2.locator("//input[@type='text']").fill("testing frame")
await page.waitForTimeout(3000);

})