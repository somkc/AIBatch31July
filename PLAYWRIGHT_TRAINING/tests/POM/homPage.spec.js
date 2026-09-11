export class homePage{

constructor(page){
    this.page=page;
    this.addtocart="//button[@id='add-to-cart-sauce-labs-backpack']";
    ////button[@id='add-to-cart-sauce-labs-bike-light']
    // //button[@id='add-to-cart +productName']
    this.cart="//a[@class='shopping_cart_link']";
    this.filter="//select[@class='product_sort_container']";
}

async additems(){
    await this.page.locator(this.addtocart).click();
    await this.page.locator(this.cart).click();
}
async sort(sortItems){

    //await this.page.locator(this.filter);
await page.locator(this.filter).selectOption(sortItems);//visible text

}


}