// fibo[5] = fibo[5-1] + fibo[5-2]
// fibo[6] = fibo[6-1] + fibo[6-2]
// fibo[7] = fibo[7-1] + fibo[7-2]
// fibo[n] = fibo[n-1] + fibo[n-2]

function fibonacci(n){
    let fibo = [0, 1];
    for( let i=2; i<=10; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;

}

let result = fibonacci(10);
console.log(result);