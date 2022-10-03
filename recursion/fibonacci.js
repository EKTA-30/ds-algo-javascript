function fibo(num){
    if(num==0 || num ==1)
        return num;
    let term1 = fibo(num-1);
    let term2 = fibo(num-2);
    return term1 + term2;
}

console.log(fibo(6));