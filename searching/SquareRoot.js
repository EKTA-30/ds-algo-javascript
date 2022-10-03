function findSquareRoot(num){

    let start =1,end =num;

    while(start <= end){
        let  mid = parseInt(start +(end-start)/2);

        if(parseInt(num/mid) === mid)
            return mid;
        
        else if(parseInt(num/mid) < mid)
        end = mid -1;

        else
        start = mid+1;
    }

    return end;
}

console.log(findSquareRoot(14));;