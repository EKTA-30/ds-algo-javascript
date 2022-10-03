function countOfZeroes(num){
//    if(num === 0)
//    return count;

//    if(num%10 === 0)
//    return countOfZeroes(num/10,count+1);

//    return countOfZeroes(Math.floor(num/10),count)
if(num === 0)
return 0;
let remainder = num%10;

if(remainder === 0)
return 1 + countOfZeroes(num/10);

return countOfZeroes(parseInt(num/10));
}

console.log(countOfZeroes(909088));