'use strict';
let Node=require('./node')
let BinaryTree=require('./tree')
class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }
    add(value) {
        let leaf = new Node(value);
        if (!this.tree) {
            this.tree = leaf
        }else{

            let current = this.root
            
            let _traverse = (current) => {
                if (leaf.value < current.value) {
                    current = current.left
                    if (current.left) {
                        _traverse(current)
                    } else {
                        current.left = leaf;
                    }
                }
    
                if (leaf.value > current.value) {
                    current = current.right
                    if (current.right) {
                        _traverse(current)
    
                    } else {
                        current.right = leaf;
                    }
                }
    
            }
            _traverse(current)
        }

        contains(value) {
            let check=new BinaryTree(this)
            let result = check.inOrder()
            return result.includes(value)
        }
    }
}