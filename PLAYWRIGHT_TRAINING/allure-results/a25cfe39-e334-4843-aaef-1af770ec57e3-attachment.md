# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: POM\SauceTest.spec.js >> sauceTests
- Location: tests\POM\SauceTest.spec.js:3:5

# Error details

```
ReferenceError: loginPage is not defined
```

# Test source

```ts
  1 | import { expect,test } from "@playwright/test";
  2 | 
  3 | test('sauceTests',async({page})=>{
> 4 | const lo= new loginPage();
    |           ^ ReferenceError: loginPage is not defined
  5 | lo.navigate();
  6 | 
  7 | 
  8 | })
```