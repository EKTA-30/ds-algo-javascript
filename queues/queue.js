class Queue{
    constructor(){
        this.data = [];
        this.front = 0;
        this.rear = 0;
    }

    isEmpty(){
        return this.rear ==  this.front ;
    }
    enqueue(val){
        this.data[this.rear] = val;
        this.rear++;
    }

    dequeu(){
        if(this.front >= this.rear)
            {
                console.log( "Cannot dequeu from empty queue");
                return;
            }
        this.data[this.front] = 0;
        this.front = this.front+1;
        // console.log("Removed from front "+removedVal);
    }

    printList(){
        let output = ""
        for(let i = this.front;i<this.rear;i++)
            output = output+this.data[i]+" ";
            console.log(output);
    }
   
}

let queue = new Queue();

queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.printList();
queue.dequeu();
// queue.dequeu();
// queue.dequeu();
// queue.dequeu();
// queue.dequeu();
queue.printList();