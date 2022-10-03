function sum(n){
    if(n==0)
    return 1;

    let nthSum = sum(n-1);
    return 1/Math.pow(2,n) + nthSum;

}

console.log(sum(4));