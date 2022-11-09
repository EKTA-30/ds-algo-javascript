let pre = 0; 

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
    
  sumGreaterNodes() {
	let pre = 0;
	function calNodes(node){
		if (node.right != null) calNodes(node.right);
		pre = node.value = pre + node.value;
		if (node.left != null) calNodes(node.left);
	}
   calNodes(this.root);
  }

printTree(){
    console.log(this.root);
}
}
let binarySearchTree = new BST();
// console.log(root);
binarySearchTree.insertNode(50);
binarySearchTree.insertNode(40);
binarySearchTree.insertNode(60);
binarySearchTree.insertNode(35);
binarySearchTree.insertNode(45);
binarySearchTree.insertNode(55);
binarySearchTree.insertNode(65);

binarySearchTree.printTree();
binarySearchTree.sumGreaterNodes();
binarySearchTree.printTree();
console.log();
