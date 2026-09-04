import{test,expect} from '@playwright/test'
test.skip('radio',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const male= page.locator("#male");
await male.check();
await expect(page.locator("#male").isChecked());

await page.waitForTimeout(3000);

})

test('checkbox',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const monday= page.locator("//input[@id='monday']");
await monday.check();
await expect(page.locator("//input[@id='monday']").isChecked());

await page.locator("//input[@id='wednesday']").check();
await page.locator("//input[@id='saturday']").check();



const days=["#sunday","#monday","#tuesday","#wednesday","#thursday","#friday","#saturday"]

for(const i of days){
  if(!await page.locator(i).isChecked()) 
   await page.locator(i).check();
}

const checkboxes=await page.locator("//input[@class='form-check-input' and @type='checkbox' ]");
console.log(await checkboxes.count());
await page.waitForTimeout(3000);

})