class factory{
    // you cannot access non static variable inside static directly(this), in order to access non static
    //variable you can access via object
    industry="manufacture";
    static employee=3000;

    display(){
        console.log("calling display");
        console.log("inside display "+this.industry)
    }

   static info(a){
        console.log("calling info");
        console.log("inside static",+this.employee);
        console.log(a.industry);
    }
}
let fac = new factory();
console.log(fac.industry);
console.log(factory.employee)
fac.display();
factory.info(fac);