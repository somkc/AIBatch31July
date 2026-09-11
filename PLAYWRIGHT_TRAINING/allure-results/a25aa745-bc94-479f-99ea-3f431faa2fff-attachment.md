# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Day_6\softAssertion.spec.js >> softassertions
- Location: tests\Day_6\softAssertion.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//input[@id=\'password1\']')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [active] [ref=e11]: standard_user
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import{expect,test} from '@playwright/test'
  2  | 
  3  | test('softassertions',async({page})=>{
  4  | 
  5  |     await page.goto("https://www.saucedemo.com/");
  6  |     await expect.soft(page.locator("//input[@id='user-name']")).toBeVisible();
  7  |     await page.locator("//input[@id='user-name']").fill("standard_user");
> 8  |     await page.locator("//input[@id='password1']").fill("123456");
     |                                                    ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  9  |     //await page.waitForTimeout(3000);
  10 | 
  11 | })
```