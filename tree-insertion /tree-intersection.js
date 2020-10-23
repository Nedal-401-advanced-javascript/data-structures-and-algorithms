let BinaryTree= require('../tree')
function tree_intersection(tree1,tree2) {
   let arrOfTree1 = BinaryTree.preOrder(tree1)
   let arrOfTree2 = BinaryTree.preOrder(tree2)

   return arrOfTree2.filter(val=>arrOfTree1.includes(val))

}