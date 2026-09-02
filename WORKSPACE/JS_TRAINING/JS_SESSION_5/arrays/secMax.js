let numbers = [100, 35, 20, 25, 0, 35];
let max = numbers[0];
let second=0 ;

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        second = max;
        max = numbers[i];
        
    }
    else if(numbers[i] > second){
        second = numbers[i];
    }
    
    
}
console.log("Max: " + max);
console.log("Second: "+ second);