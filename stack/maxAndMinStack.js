// Given a stack, find the max and minimum value stored inside it
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

    isEmpty(){
        return this.top == -1;
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
    
    maxAndMin(){
    let res = [],max = 0,min=Number.MAX_VALUE;
    while(!this.isEmpty()){
        let temp = this.peek();
        this.pop();
        max = Math.max(temp,max);
        min = Math.min(temp,min);
    }

    res[0] = min, res[1] = max;
    return res;
}
   
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.print();

let res = stack.maxAndMin();
console.log(res);
stack.print();





