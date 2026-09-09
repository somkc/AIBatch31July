import{expect,test} from '@playwright/test'

test('softassertions',async({page})=>{

    await page.goto("https://www.saucedemo.com/");
    await expect.soft(page.locator("//input[@id='user-name1']")).toBeVisible();
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("123456");
    await page.waitForTimeout(3000);

})