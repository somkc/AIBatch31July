import {expect, test} from '@playwright/test'

test.skip('alert', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.pause();
    page.on('dialog',async dialog=>{
        console.log(dialog.message());
        console.log(dialog.type());
        await dialog.dismiss();
        
    })

    await page.locator('#alertBtn').click();
    await page.waitForTimeout(3000);

})

test.skip('confirmation', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.pause();
    page.on('dialog',async dialog=>{
        console.log(dialog.message());
        console.log(dialog.type());
        await dialog.dismiss();
        
    })

    await page.locator('#confirmBtn').click();
    await page.waitForTimeout(3000);

})

test('prompt', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.pause();
    page.on('dialog',async dialog=>{
        console.log(dialog.message());
        console.log(dialog.type());
        await dialog.accept("Peter");
        
    })

    await page.locator('#promptBtn').click();
    console.log(await page.locator("#demo").textContent());
    await page.waitForTimeout(3000);

})