function cyclicRotationByOne(arr){
    if(arr.length === 0 || arr==null)
        return arr;
    let n = arr.length;
    let last = arr[n-1];

    for(let i =n-1;i>0;i--){
        arr[i] = arr[i-1];
    }
    arr[0] = last;
    return arr;
}

let arr = [5,9,1,2,0];
console.log(cyclicRotationByOne(arr));