function powerOf5(num){
    if(num <= 0)
        throw new Error("Invalid input")
    if(num ==1)
        return 1;
    let smallerAnswer = powerOf5(num-1);

    return smallerAnswer + 1/(Math.pow(num,5));    
}
function util()
{
    try{
        console.log(powerOf5(3));
    }
    catch(err){
        console.log(err);
    }
}

util()