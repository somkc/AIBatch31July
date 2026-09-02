let number = 34;

if(number % 5 == 0){
    console.log("divisible by 5");
    if(number % 10 == 0){
        console.log("divisible by both");
    }
}else{
    console.log("not divisible");
}