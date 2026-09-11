export class loginPage{

constructor(page){
this.page=page;
this.username="//input[@id='user-name']";
this.password="//input[@id='password']";
this.loginbutton="//input[@id='login-button']";
this.error="//h3[@data-test='error']";

}

async navigate(){
    await this.page.goto("https://www.saucedemo.com/");
}

async login(uname,pwd){
await this.page.locator(this.username).fill(uname);
await this.page.locator(this.password).fill(pwd);
await this.page.locator(this.loginbutton).click();

}

}
