let numbers = [10, 20, 30, 40, 80];
let target = 70;

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] == target) {
            console.log(i + " " + j);
        }
        
    }
    
}