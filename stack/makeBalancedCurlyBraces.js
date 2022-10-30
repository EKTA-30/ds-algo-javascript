function countBracketReversals(input){
	//write your logic here, return the output
    let stack = [],  ans =-1;

    for(let bracket of input){
        if (bracket == '}' && !stack.length == 0) {
            if (stack[stack.length - 1] == '{')
                stack.pop();
            else
                stack.push(bracket);
        }
        else
            stack.push(bracket);
    }
    // console.log(stack);
    // if(stack.length === 0){
    //     ans = 0;
    // }
    // else{
    //     let count = 0;
    //     while(stack.length != 0){
    //         stack.pop();
    //         count++;
    //     }
    //     if(parseInt(count%2) == 0){
    //         ans = parseInt(count/2);
    //     }
    // }
    // return ans;
    let stackSize = stack.length;
	let n = 0;
	while(stack.length!=0 && stack[stack.length-1] == '{'){
		stack.pop();
		n++;
	}
	
	return (parseInt(stackSize/2) + parseInt(n%2)); 

}

let input = "{{{{}}"
console.log(countBracketReversals(input));