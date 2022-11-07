class Tree{
    constructor(){
        this.root = null;
    }
    //inserting a node into the tree
     insert(value = null) {
    if (!Number.isInteger(value)) {
      return "please insert values like integer ex - 2,3,4,5,";
    }

    const currentNode = this.root;

    if (!currentNode) {
      const newNode = new TreeNode(value);
      this.root = newNode;
    } else {
      function traverseAndAddNode(node) {
        if (node.value < value) {
          if (!node.right) {
            return (node.right = new TreeNode(value));
          } else {
            return traverseAndAddNode(node.right);
          }
        } else {
          if (!node.left) {
            return (node.left = new TreeNode(value));
          } else {
            return traverseAndAddNode(node.left);
          }
        }
      }
      traverseAndAddNode(this.root);
    }

    return this.root;
  }
}

class Treenode{
    constructor(value,left = null,right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }

}

// function findHeightOfTree(root){
//     if(root === null)
//         return;

//     return 1 + Math.max((findHeightOfTree(root.left)),findHeightOfTree(root.right));
// }