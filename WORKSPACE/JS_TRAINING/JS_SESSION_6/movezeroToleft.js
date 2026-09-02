let a = [1,0,1,0,1,1,1,0,1,0,0];
let zeroCount=0;
let result = [];
for (let i = 0; i < a.length; i++) {

    if (a[i] === 0) {
        zeroCount++;
    }
    else {
        result.push(a[i]);
    }
}
 for (let i = 0; i < zeroCount; i++) {
    result.unshift(0);
}
console.log(result);