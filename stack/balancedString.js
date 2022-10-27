function makeBalacedString(s){
    let res = [];
    let count = 0;
    for(let idx=s.length-1;idx>0;idx--){
    if(res.length==0){
    res.push(s.charAt(idx));
    }
    else if(res[res.length-1]=='a' && s.charAt(idx)=='b')
    {
    count+=1;
    res.pop();
    }
    else{
    res.push(s.charAt(idx));
    }
    }
    return count;
}



let str = "ababaaaabbbbbaaababbbbbbaaabbaababbabbbbaabbbbaabbabbabaabbbababaa"
let res = makeBalacedString(str);
console.log(res);