import  {expect, test } from '@playwright/test'

test('keyboard',async({page})=>{

await page.goto("https://demoqa.com/text-box");
await page.locator("#currentAddress").fill("24 bakers street");
await page.pause();
await page.keyboard.press('Control+A');
await page.keyboard.press('Control+C');
await page.keyboard.press('Tab');
await page.keyboard.press('Control+V');
await page.waitForTimeout(3000);



})