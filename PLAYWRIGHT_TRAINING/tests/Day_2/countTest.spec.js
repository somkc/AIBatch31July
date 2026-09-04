import{expect, test} from '@playwright/test'
test.skip('countlinks',async({page})=>{
await page.goto("http://www.deadlinkcity.com/");
const links=await page.$$("a");
console.log(links.length);
for(const i of links){
    const val=await i.textContent();
    console.log(val);
}

})

test('count',async({page})=>{
await page.goto("https://www.saucedemo.com/");
await page.locator("#user-name").fill("standard_user");
await page.locator("#password").fill("secret_sauce");
await page.locator("#login-button").click();
const items= await page.$$(".inventory_item_name");
for(const i of items){
const val=await i.textContent();
console.log(val);

}

})
