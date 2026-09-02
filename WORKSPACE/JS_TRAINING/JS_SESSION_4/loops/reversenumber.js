let number = 12345;
let reverse = 0;

while (number > 0) {

    let digit = number % 10;

    reverse = reverse * 10 + digit;

   
   number=parseInt(number/10);
}

console.log("Reverse:", reverse);

// Output:
// Reverse: 54321