import {expect,test} from '@playwright/test'

test.skip('mousehover',async({page})=>{
  await page.goto("https://www.globalsqa.com/demo-site/");
  const menu=await page.locator("//a[@class='no_border'][normalize-space()='Free Ebooks']");
  await menu.hover();
  const submenu=page.locator("//span[normalize-space()='Free Deep Learning eBooks']");
  await submenu.click();
  await page.waitForTimeout(3000);

})

test('rightclick',async({page})=>{
  await page.goto("https://demoqa.com/buttons");
 const rightbutton= await page.locator("#rightClickBtn");
 await page.waitForTimeout(3000);
  rightbutton.click({button:"right"});
  await page.waitForTimeout(3000);

})

test.only('doubleclick',async({page})=>{
  await page.goto("https://demoqa.com/buttons");
 const double= await page.locator("#doubleClickBtn");
 await page.waitForTimeout(3000);
  double.dblclick();
//  await page.waitForTimeout(3000);
  await page.locator("//input[@id='name]").isVisible()

})