function stockSpanProblem(stockPrizes){
    let previousGreatestPrize = new Array(stockPrizes.length);
    let res = new Array(stockPrizes.length);
    previousGreatestPrize = previousGreatestElementIndices(stockPrizes);

    for(let i =0;i<stockPrizes.length;i++){
        res[i] = i - previousGreatestPrize[i];
    }

    return res;

}

function previousGreatestElementIndices(arr){
    let stack = []
    let res = new Array(arr.length)
    res.fill(0);
    let n = res.length;
    let i = 0;
    // res[0] = -1;
    stack.push(arr[0]);

    while(i<n){

        let curr = arr[i];
        // console.log(curr,this.peek());

        while(stack.length >0 && curr >= stack[stack.length-1])
            stack.pop();
        
        if(stack.length === 0)
            res[i] = -1;
        else
        {
            // console.log(this.top, this.peek());
            res[i] = arr.indexOf(stack[stack.length-1]);
            // console.log(this.peek(), this.top);
        }
        stack.push(i);
        i++;
    }
    return res;

}

let stockPrizes = [100,80,60,70,60,75,85]
let res = stockSpanProblem(stockPrizes);
console.log(res);