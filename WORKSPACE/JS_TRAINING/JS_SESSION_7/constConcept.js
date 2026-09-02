class employee{
    name;
    salary;
   
    constructor(name,salary){
        console.log("calling constructor");
        this.name=name;
        this.salary=salary;
    }
    info(){

        console.log(this.name);
        console.log(this.salary);

    }
     
}

let emp= new employee("Lee",4544);
emp.info();