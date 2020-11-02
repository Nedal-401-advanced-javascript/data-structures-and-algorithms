let tree = {
    root: {
      value: 5,
      left: {
        value: 1,
        left: {
          value: 3,
          left: null,
          right: null,
        },
        right: {
          value: 2,
          left: null,
          right: null,
        },
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
  };
/**
 * 1. travesing through the tree sum the nodes values
 * 2.
 */

function mergeTree(node, node2) {
  if (node == null) return node2;
  if (node2 == null) return node;
  console.log(node.value,node2.value);
  node.value += node2.value;
  node.left = mergeTree(node.left, node2.left);
  node.right = mergeTree(node.right, node2.right);
  return node;
}

console.log(mergeTree(tree.root,tree.root));
