function pathFromRootToGivenNode(root, res, node) {
  if (root === null) return false;

  res.push(root.value);
  if (root.value === node.value) {
    return true;
  }

  if (
    pathFromRootToGivenNode(root.left, res, node) ||
    pathFromRootToGivenNode(root.right, res, node)
  );
  {
    return true;
  }
}

let res = [];
console.log(res);