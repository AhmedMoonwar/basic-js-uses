// 6! = 1*2*3*4*5*6
// 6! = (6-1)!*6
// 6! = (n-1)!*n

function factorialRecursive(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorialRecursive(n - 1);
    }
}

var result = factorialRecursive(6);
console.log(result);