function feetToMile(n){
    if( n == 0){
        return 0;
    }
    else if(n < 0){
        return -1;
    }
    else{
        let mile = n * 0.0001894;
    return mile.toFixed(7);
    }
}

let result = feetToMile(500);
console.log(result);