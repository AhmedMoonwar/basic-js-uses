function checkPrime(n){
    for(let i=2; i<n; i++){
        if(n % i == 0){
            return "Not a prime number";
        }
    }
    return "A prime number";
}

let result = checkPrime(13);
console.log(result);