class prot{
    name="steve";
    m1(){
        console.log("calling m1");
    }
}
p= new prot();
console.log(p.name);
p.m1();
prot.prototype.age=10;
prot.prototype.gender="male";
console.log(p.age);
console.log(p.gender);

//to add function
prot.prototype.m2=function(){
    console.log("calling m2")
}

m2();

console.log("*******************************");
 p1= new prot();
// console.log(p1.name);
// p1.m1();
 console.log(p1.age);
console.log(p1.gender);
 p1.m2();
