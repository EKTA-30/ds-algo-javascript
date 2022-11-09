let prev = null;

function flatten(root){
    if(root == null)
        return;
    flatten(root.right);
    flatten(root.left);

    root.right = prev;
    root.left = null;
    prev = root;
}