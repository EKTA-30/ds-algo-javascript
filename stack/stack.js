class Stack{
    constructor(){
        this.data = [];
        this.top = -1;
    }

    push(value){
        this.top++;
        this.data[this.top] = value;
    }

    pop(){
        if(this.top < 0){
            console.log("Stack underflow");
            return;
        }
        this.data.pop();
        this.top--;
    }

    print(){
        let top = this.top;
        while(top >=0){
            console.log(this.data[top]);
            top--;
        }
    }
    peek(){
        if(this.top >=0)
        return this.data[this.top]
    }

    // insertElementAtBottom(value) {
    //     if (this.isEmpty()) {
    //     this.push(value);
    //     return;
    //     }
    //     const tmp = this.peek();
    //     this.pop();
    //     this.insertElementAtBottom(value);
    //     this.push(tmp);
    //     return;
    // }

    // reverse(){
    //     if(this.isEmpty())
    //     return;

    //     let temp = this.peek()
    //     this.pop();
    //     this.reverse();
    //     this.insertElementAtBottom(temp);

    //     // this.print()
    // }

    sortStack(){
        if(this.isEmpty())
            return;
        
        let temp = this.peek();
        this.pop();
        this.sortStack()
        this.insertInSortedOrder(temp);
    }

    maxAndMin(){
        let res = [],max = 0,min=0;
        while(!this.isEmpty()){
            let temp = this.peek();
            this.pop();
            max = Math.max(temp,max);
            min = Math.min(temp,min);
        }

        res[0] = min, res[1] = max;
        return res;
    }

    insertInSortedOrder(data){
        if(this.isEmpty() || this.peek() >= data)
            {
                this.push(data);
                return;
            }
        let temp = this.peek()
        this.pop()
        this.insertInSortedOrder(data)
        this.push(temp);
    }

        nextGreaterElements2(nums) {
        let numbers = new Array(2*nums.length);
        let index = 0;
        for(let i=0;i<nums.length;i++){
            numbers[index++] = nums[i];
        }
          for(let i=0;i<nums.length;i++){
            numbers[index++] = nums[i];
        }
        let res = this.nextGreaterElement(numbers);
        let result = res.slice(0,parseInt(numbers.length/2));
        return result;
        }
        nextGreaterElement(arr){
            let res = new Array(arr.length)
            res.fill(0);
            let n = res.length;
            let i = n-2;
            res[n-1] = -1;
            this.push(arr[n-1]);
    
            while(i>=0){
    
                let curr = arr[i];
    
                while(!this.isEmpty() && curr >= this.peek())
                    this.pop();
                
                if(this.isEmpty())
                    res[i] = -1;
                else
                    res[i] = this.peek();
                this.push(curr);
                i--;
            }
            return res;
    
        }
    nextSmallestElement(arr){
        let res = new Array(arr.length)
        res.fill(0);
        let n = res.length;
        let i = n-2;
        res[n-1] = -1;
        this.push(arr[n-1]);

        while(i>=0){

            let curr = arr[i];

            while(!this.isEmpty() && curr <= this.peek())
                this.pop();
            
            if(this.isEmpty())
                res[i] = -1;
            else
                res[i] = this.peek();
            this.push(curr);
            i--;
        }
        return res;

    }

   
     previousGreatestElementIndices(arr){
        let res = new Array(arr.length)
        res.fill(0);
        let n = res.length;
        let i = 0;
        // res[0] = -1;
        this.push(arr[0]);

        while(i<n){

            let curr = arr[i];
            // console.log(curr,this.peek());

            while(!this.isEmpty() && curr >= this.peek())
                this.pop();
            
            if(this.isEmpty())
                res[i] = -1;
            else
            {
                // console.log(this.top, this.peek());
                res[i] = arr.indexOf(this.peek());
                // console.log(this.peek(), this.top);
            }
            this.push(curr);
            i++;
        }
        return res;

    }
    previousSmallestElement(arr){
        let res = new Array(arr.length)
        res.fill(0);
        let n = res.length;
        let i = 1;
        res[0] = -1;
        this.push(arr[0]);

        while(i<n){

            let curr = arr[i];

            while(!(this.isEmpty()) && curr <= this.peek())
                this.pop();
            
            if(this.isEmpty())
                res[i] = -1;
            else
                res[i] = this.peek();
            this.push(curr);
            i++;
        }
        return res;

    }

    // validParanthesis(str){
    //     if(str.length == 0)
    //         return true;
    //     if(str[0] ==')' || str[0] == ']' || str[0] == '}')
    //         return false;
    //         for(let s of str){
    //             if(s == '(' || s=='{' || s == '[')
    //                 this.push(s);
    //             else if( !this.isEmpty() && s == this.matchingPair(this.peek()))
    //                 this.pop();
    //             else
    //                 return false;
    //         }

    //         return this.isEmpty();
    // }

    // matchingPair(s){
    //     if(s == '(')
    //         return ')'
    //     if(s == '[')
    //         return ']'
    //     if(s == '{')
    //         return '}'
    // }

    isEmpty(){
        return this.top == -1;
    }
}

let stack = new Stack();
let arr = [1,2,3,4,3];
console.log(stack.nextGreaterElements2(arr));

// let arr = [100,80,60,70,60,75,80];
// let res = stack.previousGreatestElementIndices(arr);

// let span = stockSpanProblem(res,arr);
// console.log(span);

// function stockSpanProblem(res,arr){
//     let span = new Array(arr.length);
//     span.fill(0);
//     for(let i=0;i<span.length;i++)
//         span[i] = i - res[i];

//         return span;
// }

// console.log(res);


