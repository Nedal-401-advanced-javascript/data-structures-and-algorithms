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

// Q1: Root to leaf path sum equal to a given number
console.log('Q1: ==============');

function hasPathSum(node, sum) {
  if (node) {
    sum -= node.value;
    if (sum == 0 && node.left == null && node.right == null) return true;
    return hasPathSum(node.right, sum) || hasPathSum(node.left, sum);
  } else {
    return sum === 0;
  }
}
console.log(hasPathSum(tree.root, 1));

// Q2: Print all the paths from root, with a specified sum in Binary tree
console.log('Q2: ==============');

// 1- traverse through the tree using root>left>right
// 2- when ever find path print it out and countinue
// 3- print if true and back if false

function printPathSum(node, sum, print = "path found: ") {
  print += `> (${node.value})`;
  sum -= node.value;
  if (sum == 0) console.log(print);
  if (node.left) printPathSum(node.left, sum, print);
  if (node.right) printPathSum(node.right, sum, print);
}
printPathSum(tree.root, 9);

//Q3: Sum of all the numbers that are formed from root to leaf paths
console.log('Q3: ==============');
function sumFormedPathToleaf(node, sum = 0) {
  //   if (node == null) return 0;
  sum = sum * 10 + node.value;
  if (node.left == null && node.right == null) return sum;
  return (
    sumFormedPathToleaf(node.left, sum) + sumFormedPathToleaf(node.right, sum)
  );
}

console.log( sumFormedPathToleaf(tree.root));
