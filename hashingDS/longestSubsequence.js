function longestConsequtiveSubsequence(nums){
    let res = 0;
    let set = new Set();
    let result = [];
    for(let num of nums)
        set.add(num);
    
    for(let num of nums){
        let max =1,preVal= num-1,nextVal = num+1;
        let result = [];
        result.push(num);
        while(set.has(preVal)){
            result.push(preVal);
            max++;
            set.delete(preVal--);
        }
        while(set.has(nextVal)){
            result.push(nextVal);
            max++;
            set.delete(nextVal++);
        }

        res = Math.max(res,max);
    }
        return result; 
}

let arr = [100,4,200,1,0,3,2,5];
console.log(longestConsequtiveSubsequence(arr));