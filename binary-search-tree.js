class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = { val: val, left: null, right: null };
    let newestNode = this;
    while (true) {
      if (val > newestNode.val) {
        if (!newestNode.left) {
          newestNode.left = newNode;
          break;
        }
        newestNode = newestNode.left;
      }
      else {
        if (!newestNode.right) {
          newestNode.right = newNode;
          break;
        }
        newestNode = newestNode.right;
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (val < this.val) {
      if (this.left) {
        this.left.insert(val);
      } else {
        this.left = { val: val, left: null, right: null };
      }
    } else {
      if (this.right) {
        this.right.insert(val);
      } else {
        this.right = { val: val, left: null, right: null };
      }
    }
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this;
    while (currentNode) {
      if (currentNode.val === val) return currentNode;
      if (currentNode.val > val) {
        currentNode = currentNode.left;
      } else {
        currentNode.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this) return undefined;
    if (this.val === val) return this;
    if (currentNode.val > val) {
      currentNode = currentNode.left;
    } else {
      currentNode.right;
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root) {
    console.log(node.val);
    if (node.left) this.traverse(node.left);
    if (node.right) this.traverse(node.right);
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root) {
    if (node.left) this.traverse(node.left);
    console.log(node.val);
    if (node.right) this.traverse(node.right);
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root) {
    if (node.left) this.traverse(node.left);
    if (node.right) this.traverse(node.right);
    console.log(node.val);
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs(val) {
    const toVisitQueue = [this]; //can be a seperate function or tree class function
    while (toVisitQueue.length) {
      const current = toVisitQueue.shift();
      if (current.val === val)
        return current; //if its the value we asked for, return it
    }
    for (let child of current.children) {
      toVisitQueue.push(child);
    }
  }


  // /** Further Study!
  //  * remove(val): Removes a node in the BST with the value val.
  //  * Returns the removed node. */

  // remove(val) {

  // }

  // /** Further Study!
  //  * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  // isBalanced() {

  // }

  // /** Further Study!
  //  * findSecondHighest(): Find the second highest value in the BST, if it exists.
  //  * Otherwise return undefined. */

  // findSecondHighest() {

  // }
}

module.exports = BinarySearchTree;
