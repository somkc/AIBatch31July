let numbers = [10, 15, 20, 25, 30, 35];
let max = numbers[0];
let smallest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i]< smallest) {
        smallest = numbers[i];
    }
    
}
console.log(max);
console.log(smallest);