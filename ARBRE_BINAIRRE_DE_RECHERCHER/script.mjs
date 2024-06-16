class Node{
    constructor(value){
        this.value = value;
        this.left=null;
        this.right=null;
    }
}

class Tree{
    constructor(){
        this.root = null;
    }

    insert(racine,value){
        let newNode = new Node(value);
        if(racine === null){
            racine=newNode;
        }else{
            if(racine.value>value){
                if(racine.left === null){
                    racine.left = newNode;
                }else{
                    this.insert(racine.left,value);
                }
            }else if(racine.value<value){
                if(racine.right === null){
                    racine.right=newNode;
                }else{
                    this.insert(racine.right,value);
                }
            }
        }
        return racine;
    }

    deleteNode(root, value) {
        // Base case
        if (root === null)
            return root;

        // If the value to be deleted is smaller than the root's value, then it lies in the left subtree
        if (value < root.value)
            root.left = this.deleteNode(root.left, value);
        // If the value to be deleted is greater than the root's value, then it lies in the right subtree
        else if (value > root.value)
            root.right = this.deleteNode(root.right, value);
        // If value is same as root's value, then this is the node to be deleted
        else {
            // Node with only one child or no child
            if (root.left === null)
                return root.right;
            else if (root.right === null)
                return root.left;

            // Node with two children: Get the inorder successor (smallest in the right subtree)
            root.value = this.minValue(root.right);

            // Delete the inorder successor
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }

    maxValue(root){ 
        while (root.right !== null){
            root=root.right;
        }
        return root.value;
    }

    mivValue(root){
        while (root.left !== null){
            root=root.left;
        }
        return root.value;
    }

    static inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.value + " ");
            this.inorder(node.right);
        }
    }

    static preOrder(node) {
        if (node !== null) {console.log(node.value + " ");
            this.inorder(node.left);
            
            this.inorder(node.right);
        }
    }

    static preOrder(node) {
        if (node !== null) {console.log(node.value + " ");
            this.inorder(node.left);
            
            this.inorder(node.right);
        }
    }

    static postOrder(node){
        if (node !== null) {
            this.inorder(node.left);
            this.inorder(node.right);
            console.log(node.value + " ");
        }
    }

    
    static prettyPrint(node, prefix = "", isLeft = true) {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          Tree.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
        if (node.left !== null) {
          Tree.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      }
}



function getRandomIntInRange(min, max) {
    if (min > max) {
        throw new Error("La borne inférieure doit être inférieure ou égale à la borne supérieure.");
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Remplir le tableau avec des valeurs aléatoires
let tab = new Array(10);
for (let i = 0; i < tab.length; i++) {
    tab[i] = getRandomIntInRange(1, 100);
}

// Afficher les valeurs du tableau
console.log("Valeurs du tableau:");
tab.forEach(value => console.log(value));

// Créer l'arbre et insérer les valeurs du tableau
let tree = new Tree();
tab.forEach(value => {
   tree.root = tree.insert(tree.root, value);
});
let trop=tree;
// Afficher l'arbre
console.log("Arbre binaire:");
Tree.prettyPrint(tree.root);
tree=trop;
Tree.inorder(tree.root);
Tree.postOrder(tree.root);
Tree.preOrder(tree.root);