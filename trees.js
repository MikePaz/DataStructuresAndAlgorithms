// A tree starts from a ROOT node and every child descends from this root node

// 2 types of binary trees: Perfect , Full

// Binary search tree Big  O = (log n) for lookup-insert-delete
/*              101
              /    \
             33     105
            / \     / \
           9  37   104 144                  */

// All child nodes in the tree at the right side must be greater than the parent node
// All child nodes in the tree at the left side must be lower than the parent node
// A node can only have up to 2 children

// https://visualgo.net/bn/bst

 
//Implementing a BST
// https://github.com/afiore/arboreal micro-lib for traversing and manipulating tree-like data structures

function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

class BinarySearchTree{
    constructor() {
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        }else{
            let currentNode = this.root
            while(true){
                if(value < currentNode.value){
                    //Left
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else{
                    //Right
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode.right = currentNode;
                }
            }
        }
    }
    lookup(value){
        if(!this.root){
            return null;
        }
        else {
            let currentNode = this.root;
            while(currentNode){
                if(value < currentNode.value){
                    currentNode = currentNode.left;
                } else if(value>currentNode.value){
                    currentNode = currentNode.right;
                }
                else if(currentNode.value === value){
                    return currentNode;
                }
            }
        }
        return false;
    }
    remove(value){
        // To be implemented
    }
}

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }

  const tree = new BinarySearchTree();

  tree.insert(101)
  tree.insert(33)
  tree.insert(105)
  tree.insert(9)
  tree.insert(37)
  tree.insert(104)
  tree.insert(144)
  tree.lookup(101);
  //JSON.stringify(traverse(tree.root)); this is to check if the BTS is made


  //Balancing BST

  /* 
  AVL TREE
  https://www.cs.usfca.edu/~galles/visualization/AVLtree.html
  https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7

  RED/BLACK TREE
  https://www.cs.usfca.edu/~galles/visualization/RedBlack.html
  https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5
*/
  

// Binary Heap
//Every node on the top is greater than every node on the next level down
//Heap is used with algorithms that ordering is important
//Heaps are great at doing comperative operations 
/*              101
              /    \
             72     33
            / \     / \
           2  45   5   1                  */ 
