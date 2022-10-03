
//  num = candidates[i]
//             subset.append(num)
//             sum_so_far +=num
//             level+=1
//             helper(i,sum_so_far,subset,level)
//             level-=1
//             sum_so_far -=num
//             subset.pop()
function findCombination(temp,ans,candidates,target){
    if(target == 0){
        ans.push(temp);
        return;
    }

    if(target < 0 || index >= candidates.length)
        return;

    for(let i=0;i<candidates.length;i++){

        if(target >= candidates[i]){
            temp.push(candidates[i]);
            findCombination(candidates,i,target-candidates[i],temp,ans);
            temp.pop();
            findCombination(candidates,i+1,target,temp,ans);
        }

        
        
    }
}

candidates = [2,3,6,7], target = 7;
let temp = [], ans = [];
findCombination(candidates,0,target,temp,ans);
console.log(ans);


// def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
//     ans1=[]
//     def F(i,ans,target):
//         if i==len(candidates):
//             if target==0:
//                 ans1.append(ans.copy())
//             return 
//         if (target>=candidates[i]):
//             ans.append(candidates[i])
//             F(i,ans,target-candidates[i])
//             ans.pop()
//         F(i+1,ans,target)
//     F(0,[],target)
//     return ans1