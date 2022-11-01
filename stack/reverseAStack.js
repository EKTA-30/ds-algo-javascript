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

    
    insertElementAtBottom(value) {
        if (this.isEmpty()) {
        this.push(value);
        return;
        }
        const tmp = this.peek();
        this.pop();
        this.insertElementAtBottom(value);
        this.push(tmp);
        return;
    }

    reverse(){
        if(this.isEmpty())
        return;

        let temp = this.peek()
        this.pop();
        this.reverse();
        this.insertElementAtBottom(temp);

        // this.print()
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.print();

stack.reverse();
stack.print();
