import {expect,test} from '@playwright/test'

test('launch',async ({page})=>{

   await page.goto("https://saucedemo.com");
   await page.waitForTimeout(5000);

})
