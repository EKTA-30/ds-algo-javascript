class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
   
}
class SingleLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    prepend(data){
        if (this.head == null)
        {
        let newNode = new Node(data);
        this.head = newNode;
        this.tail = newNode;
        this.length++;
        }
        else{
            let newNode = new Node(data);
            newNode.next = this.head;
            this.head = newNode;
            this.length++
        }
    //    this.printList(this.head);
    }

    append(data){
        if(this.head == null){
        let newNode = new Node(data);
        this.head = newNode;
        this.tail = newNode;
        this.length++;
        }
        else{
            let newNode = new Node(data);
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++
        }
        // this.printList(this.head)
    }
    insertNodeAtPosition(pos,data){
        if(pos <1 || pos > this.length +1){
            console.log("Invalid position");
            return;
        }
        if(pos ==1)
        this.prepend(data);

        else if(pos == this.length+1)
        this.append(data)

        else{
            let count = 1, temp = this.head;
            while(count < pos-1){
                pos++;
                temp = temp.next;
            }
            this.length++;
            let newNode = new Node(data);
            newNode.next = temp.next;
            temp.next = newNode;
        }
        this.printList(this.head);
        // console.log(this.length);
    }

    printList(head){
        let temp = head, output = "";
        while(temp){
            output = output + temp.data+" --> ";
            temp = temp.next;
        }
        console.log(output +"null");
    }
}

let singleLL = new SingleLL();
singleLL.insertNodeAtPosition(1,1);
singleLL.insertNodeAtPosition(2,4);
singleLL.insertNodeAtPosition(2,3);
singleLL.insertNodeAtPosition(2,2)
// singleLL.printList();
