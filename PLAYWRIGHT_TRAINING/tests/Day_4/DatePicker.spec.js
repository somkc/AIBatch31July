import {expect,test} from '@playwright/test';

test('datepick',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator("#datepicker").click();
const date=18;
const month="December"
const year=2026



while(true){
const currentMonth=await page.locator(".ui-datepicker-month").textContent();
const currentYear=await page.locator(".ui-datepicker-year").textContent();
console.log(currentMonth);
console.log(currentYear);   
if(currentYear==year && currentMonth==month)
    break;

await page.locator("//a[@title='Next']").click();
}

await page.locator(`//a[normalize-space()='${date}']`).click();
await page.waitForTimeout(3000);




})