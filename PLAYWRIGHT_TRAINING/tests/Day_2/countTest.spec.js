import{expect, test} from '@playwright/test'
test('countlinks',async({page})=>{
await page.goto("http://www.deadlinkcity.com/");
const links=await page.$$("a");
console.log(links.length);
for(const i of links){
    const val=await i.textContent();
    console.log(val);
}

})
