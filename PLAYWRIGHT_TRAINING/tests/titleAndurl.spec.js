import {expect,test} from  '@playwright/test'
 test('verify titleAnurl',async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    console.log("URL: ", await page.url());
    console.log("title: ",await page.title());
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Lab");


 })