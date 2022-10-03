function factorialOfNum(num){
    if(num==0)
    return 1;

    return num * factorialOfNum(num-1);
}

console.log(factorialOfNum(5));