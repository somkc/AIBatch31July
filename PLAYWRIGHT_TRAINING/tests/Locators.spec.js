import {expect,test} from '@playwright/test'

test('locatorID',async ({page})=>{
await page.goto("https://www.saucedemo.com");
//await page.locator('id=user-name').fill("standard_user");
//await page.locator('#user-name').fill("standard_user");
//await page.locator("//input[@id='user-name']").fill("standard_user");
await page.getByPlaceholder("Username").fill("standard_user");
await page.waitForTimeout(3000);


})