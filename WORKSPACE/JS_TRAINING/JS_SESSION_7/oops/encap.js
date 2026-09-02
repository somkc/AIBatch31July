class emp{
    constructor(){
    let name;
    let salary;
    }

    setName(name){

        this.name=name;
    }
    setSalary(salary){
        this.salary=salary;
    }
getName(){
    return this.name;
}
getSalary(){
    return this.salary;
}

}
 let e = new emp();
 e.setName("Steve");
 e.setSalary(3000);
 console.log(e.getName());
 console.log(e.getSalary());
