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

    previousGreatestElement(arr){
        let res = new Array(arr.length)
        res.fill(0);
        let n = res.length;
        let i = 1;
        res[0] = -1;
        this.push(arr[0]);

        while(i<n){

            let curr = arr[i];

            while(!this.isEmpty() && curr >= this.peek())
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

let arr = [4,12,5,3,1,2,5,3,1,2,4,6];

let res = stack.previousSmallestElement(arr)

console.log(res);

// stack.sortStack();
// stack.print();