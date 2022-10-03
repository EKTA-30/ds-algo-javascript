function strLen(str,index,len){
    if(index === str.length)
        return len;
    return strLen(str,index+1,len+1)
}

console.log(strLen("12345",0,0));