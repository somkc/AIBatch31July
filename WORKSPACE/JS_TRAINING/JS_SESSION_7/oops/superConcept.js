//if your parent has consructor, then you child should call parent constructor inside child constructor, 
//if your parent constructor has parameter then you child constructor should pass//call the parameter
class Animal{
    age=10;
    constructor(color){
    this.color=color;
    }
print(){
    console.log(this.color);
}
}

class Dog extends Animal{
    food;
   constructor(color,food){

    super(color)
    this.food=food;
   }
      

    display(){
        console.log(this.color);
        console.log(this.age);
        console.log(this.food);
    }
}

d= new Dog("red","meat");
d.display();
console.log("***********");
d.print();