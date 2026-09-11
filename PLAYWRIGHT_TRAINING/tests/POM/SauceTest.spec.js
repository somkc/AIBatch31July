import { expect,test } from "@playwright/test";
import { loginPage } from "./loginPage.spec";
import { homePage } from "./hompage.spec";

test('sauceTestsadditems',async({page})=>{
const lo= new loginPage(page);
await lo.navigate();

await lo.login('standard_user','secret_sauce');

const home= new homePage(page);
home.additems();
await page.waitForTimeout(3000);


})
test('sauceTests invalid login',async({page})=>{
const lo= new loginPage(page);
await lo.navigate();

await lo.login('standard_user','secret_sauce1');
await page.locator(lo.error).isVisible();





})