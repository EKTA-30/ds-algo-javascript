function longestNonRepeatingSubstring(str){
    let test = "", max =0;
    for(let s of str){
        if(test.includes(s)){
            test = test.substring(test.indexOf(s)+1);
        }
        test = test + s;
        max = Math.max(max,test.length);
    }
    return max;
}

let str = "abcddabcbb";
console.log(longestNonRepeatingSubstring(str));