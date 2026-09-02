function isPrime(a){
    if (a <= 1) {
        return false;
    }
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            return false;
        }
        
    }
    return true;

}
console.log(isPrime(49));