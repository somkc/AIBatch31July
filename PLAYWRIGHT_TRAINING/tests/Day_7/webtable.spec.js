import {expect,test} from '@playwright/test'

test('webtables',async({page})=>{

    await page.goto('https://omayo.blogspot.com/');
    const table=  page.locator('#table1');
    const colms=table.locator('th');// stored column headers
    const totalColms=await colms.count();
    console.log("total columns-> "+totalColms);
    for(let i=0;i<totalColms;i++){
        const col=await colms.nth(i).textContent();
        console.log(col);
    }

    const rows= table.locator('tbody tr');// store all the rows - 4
    const totalrows=await rows.count();
    console.log('totalrows -> '+totalrows);
    const frow=rows.nth(0).locator('td');  //store first row 
    console.log("first row "+ await frow.count());
    const col1=await frow.nth(0).textContent();
    const col2=await frow.nth(1).textContent();
    const col3=await frow.nth(2).textContent();
    // console.log(col1);
    // console.log(col2);
    // console.log(col3);

    for(let i=0;i<totalrows;i++){
    const row=rows.nth(i).locator('td');
    for(let j=0;j<totalColms;j++){
    const c1=await row.nth(j).textContent();
      console.log(c1);
    }
  

    }

})