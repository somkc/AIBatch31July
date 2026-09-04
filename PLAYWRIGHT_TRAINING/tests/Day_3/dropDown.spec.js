import{expect,test} from '@playwright/test'
test("dropdown",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator("#country").selectOption('France');//visible text
await page.locator("#country").selectOption({value:'uk'});//value
await page.locator("#country").selectOption({index:8});//index

await page.waitForTimeout(3000);
const options=page.locator("#country option")
const count=await options.count();
console.log(count);
for (let i=0;i<count;i++){
    let val=await options.nth(i).textContent();
    console.log(val);

}

})