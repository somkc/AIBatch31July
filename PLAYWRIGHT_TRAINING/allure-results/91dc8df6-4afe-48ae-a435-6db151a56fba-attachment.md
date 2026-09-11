# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: POM\SauceTest.spec.js >> sauceTests
- Location: tests\POM\SauceTest.spec.js:4:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'goto')
```

# Test source

```ts
  1  | export class loginPage{
  2  | 
  3  | constructor(page){
  4  | this.page=page;
  5  | this.username="//input[@id='user-name']";
  6  | this.password="//input[@id='password']";
  7  | this.loginbutton="//input[@id='login-button']";
  8  | 
  9  | }
  10 | 
  11 | async navigate(){
> 12 |     await this.page.goto("https://www.saucedemo.com/");
     |                     ^ TypeError: Cannot read properties of undefined (reading 'goto')
  13 | }
  14 | 
  15 | async login(uname,pwd){
  16 | await this.page.locator(this.username).fill(uname);
  17 | await this.page.locator(this.password).fill(pwd);
  18 | await this.page.locator(this.loginbutton).click();
  19 | 
  20 | }
  21 | 
  22 | }
  23 | 
```