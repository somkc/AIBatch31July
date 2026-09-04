import {expect, test} from '@playwright/test'
test('assertions',async({page})=>{
await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
await expect(page).toHaveTitle("Register Account");
const radio= await page.locator("//input[@name='customer_group_id']");
await expect(radio).toBeChecked();
const fname=await page.locator("//input[@id='input-firstname']");
await expect(fname).toBeEnabled();
fname.fill("som");
await expect(fname).toHaveValue("som");
const newsletter= await page.locator("//label[normalize-space()='No']");
await expect(newsletter).toHaveValue("0");
const email=await page.locator("//input[@id='input-email']");
await expect(email).toHaveAttribute("placeholder","E-Mail");

})
