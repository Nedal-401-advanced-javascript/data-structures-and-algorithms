"use strict";
let FizzBuzzTree=(tree)=> {
    let newTree=tree
            function check(num) {
                
            if (!node.vaue%5 && !node.value%3) {
                return 'FuZZBuzz'
            }else if (!node.value%3) {
                return 'FuZZ'
            }else if (!node.value%5) {
                return 'Buzz'
            }else return num
            }
            
        let _traverse = (node) => {
            
            node.value=check(node.value);
            // Go Left
            if (node.left) _traverse(node.left);
            // Go Right
            if (node.right) _traverse(node.right);
        }
        _traverse(newTree.root);
        return newTree;
    }