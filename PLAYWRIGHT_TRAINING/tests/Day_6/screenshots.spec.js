import {expect,test} from '@playwright/test'
test('screenshots',async({page})=>{
 await page.goto("https://demoblaze.com/");
await page.waitForTimeout(3000);
 await page.screenshot({path:'tests/screenshots/'+'home.jpeg'})


})
test('full screenshots',async({page})=>{
 await page.goto("https://demoblaze.com/");
await page.waitForTimeout(3000);
 await page.screenshot({path:'tests/screenshots/'+'full.jpeg',fullPage:true})


})

test.only('locator screenshot',async({page})=>{
 await page.goto("https://demoblaze.com/");
await page.waitForTimeout(3000);
await page.locator("//div[@id='tbodyid']").screenshot({path:'tests/screenshots/'+'ele.jpeg'})


})