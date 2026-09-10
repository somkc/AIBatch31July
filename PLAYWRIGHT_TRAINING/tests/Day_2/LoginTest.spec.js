import {expect, test} from '@playwright/test'
import { skip } from 'node:test';

test('verify login',async({page})=>{
await page.goto("https://www.saucedemo.com/");
await page.locator("#user-name").fill("standard_user");
await page.locator("#password").fill("secret_sauce");
await page.locator("#login-button").click();
//await page.waitForTimeout(3000);
expect(await page.locator(".title")).toBeVisible();

})

test.skip('incorrect credentials',async({page})=>{
await page.goto("https://www.saucedemo.com/");
await page.locator("#user-name").fill("standard_user");
await page.locator("#password").fill("secret_sauce2");
await page.locator("#login-button").click();
//await page.waitForTimeout(3000);
expect(await page.locator("h3[data-test='error']")).toBeVisible();
console.log(await page.locator("h3[data-test='error']").textContent())
expect(await page.locator("h3[data-test='error']")).toContainText("Username and password do not match any user in this service");

})

test('place order',async({page})=>{
await page.goto("https://www.saucedemo.com/");
await page.locator("#user-name").fill("standard_user");
await page.locator("#password").fill("secret_sauce");
await page.locator("#login-button").click();
await page.locator("#add-to-cart-sauce-labs-backpack").click();
await page.locator(".shopping_cart_link").click();
await page.locator("#checkout").click();
await page.locator("#first-name").fill("som");
await page.locator("#last-name").fill("k");
await page.locator("#postal-code").fill("4156");
await page.locator("#continue").click();
await page.locator("#finish").click();
const order_confirmation=await page.locator(".complete-text").textContent()
console.log(order_confirmation);
expect(await page.locator(".complete-text")).toBeVisible();



})

test('verify multi login',async({page})=>{
const uname=["standard_user","locked_out_user","problem_user","performance_glitch_user","error_user","visual_user"]    

for(const i of uname){
    try{
await page.goto("https://www.saucedemo.com/");
await page.locator("#user-name").fill(i);
await page.locator("#password").fill("secret_sauce");
await page.locator("#login-button").click();
await expect(page.locator(".title")).toBeVisible();
await page.locator("//button[@id='react-burger-menu-btn']").click();
await page.locator("//a[@id='logout_sidebar_link']").click();

}
catch(error){
    console.log(i+" not able to login")
await page.goto("https://www.saucedemo.com/");
}
}

})