class TreeNode{
    constructor(value,left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insertNode(value){

        if(this.root === null)
        {
            let newNode = new TreeNode(value);
            this.root = newNode;
            return this.root;
        }
        else{
            function traverseAndAddNode(node){
                if(value < node.value){
                    if(!node.left)
                    return node.left = new TreeNode(value);
                    else
                    return traverseAndAddNode(node.left);
                }
                else{
                    if(!node.right)
                    return node.right = new TreeNode(value);
                    else 
                    return traverseAndAddNode(node.right,value);
                }
            }
            traverseAndAddNode(this.root);
        }
    }

    deleteNode(root,value){
        if(root === null)
        return root;

        else if (value < root.value)
        this.deleteNode(root.left,value);

        else if(value > root.value)
        this.deleteNode(root.right,value);

        else{
            //Case 1 : when the node has no children

            if(root.left == null && root.right == null)
            {
                root = null;
                return null;
            }

            //Case 2 : When the node has just one child, either left or right
            else if(root.left == null){
                let temp = root;
                root = root.right;
                temp = null;
            }
              else if(root.right == null){
                let temp = root;
                root = root.left;
                temp = null;
            }

            //Case 3 : When the node has both left and right child
            else{
                let temp = this.findMin(root.right);
                root.value = temp.value;
                root.right = this.deleteNode(root.right,temp.value);
            }


        }
    }

    findMin(root){
        let temp = root;

        while(temp.left!=null)
            temp = temp.left;
        return temp;
    }
}

let binarySearchTree = new BST();
let root = binarySearchTree.insertNode(11);
// console.log(root);
binarySearchTree.insertNode(8);
binarySearchTree.insertNode(14);
binarySearchTree.insertNode(6);
binarySearchTree.insertNode(15);
binarySearchTree.deleteNode(root,11);

console.log(root);