let a=["HTML","CSS","JS"];
let b=["SQL","MongoDB","Hadoop"];
let c=["PHP","C++"]
a.push("C#");
console.log(a);
a.pop();
console.log(a);
a.shift();
console.log(a);
a.unshift("java");
console.log(a);
delete a[1];
console.log(a);
console.log(a[1]);
let lang=a.concat(b,c);
console.log(lang);
console.log(lang[2]);

for(let i=0;i<lang.length;i++){
    console.log(lang[i]);
}
let value=lang.slice(3,6);
console.log(value);