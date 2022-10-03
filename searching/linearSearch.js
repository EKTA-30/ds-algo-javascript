function linearS(arr,target){
    let index = -1;
    for(let i=0;i<arr.length;i++){
        if(arr[i] === target){
            index = i;
            return index;
        }
    }
    return index;
}
let arr = [2,1,7,5,8,3,62,2];
let target = 56;
let index = linearS(arr,target);
if (index < 0) {
    console.log(index);
} else {
    console.log(arr[index]);
}
