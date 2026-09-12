import {expect,test} from '@playwright/test';
import { request } from 'node:http';
import { describe } from 'node:test';
var id;

test.describe.serial('api tests',()=>{

test('get',async({request})=>{
 const response=await request.get("http://localhost:8082/books"); 
 console.log("************************ GET REQUEST *******************************");
 console.log( response.status());
 console.log(await response.json());
 expect(response.status()).toBe(200);
})



test('post',async({request})=>{
const response= await request.post("http://localhost:8082/books",
    {
   data:{
  "title": "nuclear",
  "author": "Charles",
  "genre": "theory",
  "publishedYear": 2023,
  "price": 299.99,
  "isbn": "1234567effe890123"
    } , headers:{"Content-Type":"application/json"}
}
);
 console.log("************************ POST REQUEST *******************************");
console.log(response.status());
var res=await response.json()
console.log(res);

id=res.id;
console.log(id);
})



test('get id',async({request})=>{
 const response=await request.get("http://localhost:8082/books/"+id); 
  console.log("************************ GET REQUEST ID *******************************");
 console.log( response.status());
 console.log(await response.json());

})



test('put',async({request})=>{
const response= await request.put("http://localhost:8082/books/"+id,
    {
   data:{
  "title": "chemistry",
  "author": "Dean",
  "genre": "stimulation",
  "publishedYear": 2023,
  "price": 299.99,
  "isbn": "1234567effe890123"
    } 
}
);

 console.log("************************ PUT  REQUEST *******************************");
console.log(response.status());
console.log(await response.json());

})

test('delete',async({request})=>{


const response=await request.delete("http://localhost:8082/books/"+id);
 console.log("************************ DELETE REQUEST *******************************");
console.log(response.status());

});

})