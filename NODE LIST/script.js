class node{
    constructor(value){
        this.value = value || null;
        this.nextNode = null;
    }
}
class linkedList{
        constructor(){
        this.head = null;
        }

        append(value){
            let tmp=null;
            if(this.head === null){
                this.head = new node(value);
            }else{
                    tmp = this.head;
                    while(tmp.nextNode!=null){
                        tmp=tmp.nextNode;
                }
                tmp.nextNode = new node(value);
            }
        }

        prepend(value){
            let temp=null;
            if(this.head === null){
                this.head = new node(value);
            }else{
                temp = new node(value);
                temp.nextNode = this.head;
                this.head = temp;
            }
        }

        show(){if(this.head===null){
                console.log("head is null");
                return;
            }
            let tmp = this.head;
            while(tmp!=null){
                console.log(tmp.value);
                tmp=tmp.nextNode;
            }
        }
        size(){if(this.head===null){
            console.log("head is null");
            return;
        }
            let count=0;
            let temp=this.head;
            while(temp!=null){
                count++
                temp=temp.nextNode;
                
            }
            return count;

        }
        Fhead(){if(this.head===null){
            console.log("head is null");
            return;
        }
            return this.head;
        }
        tail(){if(this.head===null){
            console.log("head is null");
            return;
        }
            let temp=this.head;
            while (temp.nextNode!=null) {
                temp=temp.nextNode;
            }
            return temp;
        }
        at(value){if(this.head===null){
            console.log("head is null");
            return;
        }
            if(value>this.size()-1){
                return false;
            }else{
                let temp=this.head;
                for (let index = 0; index < value; index++) {
                    temp=temp.nextNode;
                }
                return temp;
            }
        }
        pop(){if(this.head===null){
            console.log("head is null");
            return;
        }
            let temp=this.head;
            while (temp.nextNode.nextNode!=null) {
                temp=temp.nextNode;          
            }
            temp.nextNode=null;
        }
        contain(value){if(this.head===null){
            console.log("head is null");
            return;
        }
            let temp=this.head;
            while (temp!=null) {
                if (temp.value===value) {return true;}
                temp=temp.nextNode;
            }
            return false;
        }
        find(value){if(this.head===null){
            console.log("head is null");
            return;
        }
            let temp=this.head;
            let count=0;
            while (temp!=null) {
                if(temp.value===value){
                    return count;
                }
                count++;
                temp=temp.nextNode;
            }
            return null;
        }
        toString(){if(this.head===null){
            console.log("head is null");
            return;
        }
            let temp=this.head;
            
            let stringF="";
            while (temp!=null) {
                let string=`(${temp.value}) -> `;
                stringF=stringF+string;
                temp=temp.nextNode;
            }
            return `${stringF} null`;
        }
        insertAt(value,index){
            if(this.head===null){
                console.log("head is null");
                return;
            }
            let temp=this.head;
            if(index>list.size()){
                console.log("immposible taille trop grande");
                return;
            }else{
                let temptwo= new node(value);
                for (let inde = 0; inde < index-1; inde++) {
                    temp=temp.nextNode;
                
                }   
                temptwo.nextNode=temp.nextNode;
                temp.nextNode=temptwo;
            }
        
        }
        removeAt(index){if(this.head===null){
            console.log("head is null");
            return;
        }
            let temp=this.head;
            if(index>list.size()-1){
                console.log( "immposible taille trop grande");
                return;
            }else{
                if(index===0){
                    this.head=this.head.nextNode;
                }else{
                    for (let inde = 0; inde < index-1; inde++) {
                    temp=temp.nextNode;
                
                } 
                let temptow=temp.nextNode.nextNode;
                temp.nextNode=temptow; 
                }
               
                 
            
            }
        }
    }

 // Création de la liste chaînée
let list = new linkedList();

// Cas normal : Ajouter des éléments à la fin de la liste
list.append(1);
list.append(2);
list.append(3);
console.log("Append elements:", list.toString()); // (1) -> (2) -> (3) -> null

// Cas spécial : Ajouter un élément au début de la liste
list.prepend(0);
console.log("Prepend element:", list.toString()); // (0) -> (1) -> (2) -> (3) -> null

// Taille de la liste
console.log("Size of list:", list.size()); // 4

// Tête de la liste
console.log("Head of list:", list.Fhead().value); // 0

// Queue de la liste
console.log("Tail of list:", list.tail().value); // 3

// Élément à un index donné
console.log("Element at index 2:", list.at(2).value); // 2

// Cas spécial : Pop élément dans une liste avec un seul élément
let singleElementList = new linkedList();
singleElementList.append(1);
singleElementList.pop();
console.log("Pop single element list:", singleElementList.toString()); // head is null

// Vérifier si un élément est dans la liste
console.log("Contains 2:", list.contain(2)); // true
console.log("Contains 4:", list.contain(4)); // false

// Trouver l'index d'un élément
console.log("Find index of 1:", list.find(1)); // 1
console.log("Find index of 4:", list.find(4)); // null

// Cas spécial : Insertion au début et à la fin de la liste
list.insertAt(-1, 0);
console.log("Insert -1 at index 0:", list.toString()); // (-1) -> (0) -> (1) -> (2) -> (3) -> null
list.insertAt(4, list.size());
console.log("Insert 4 at the end:", list.toString()); // (-1) -> (0) -> (1) -> (2) -> (3) -> (4) -> null

// Cas spécial : Suppression de l'élément à l'index 0
list.removeAt(0);
console.log("Remove element at index 0:", list.toString()); // (0) -> (1) -> (2) -> (3) -> (4) -> null

// Cas spécial : Suppression de l'élément à la fin
list.removeAt(list.size() - 1);
console.log("Remove last element:", list.toString()); // (0) -> (1) -> (2) -> (3) -> null

// Cas spécial : Suppression d'un élément dans une liste vide
let emptyList = new linkedList();
emptyList.removeAt(0);
console.log("Remove from empty list:", emptyList.toString()); // head is null

// Cas spécial : Insertion dans une liste vide
let emptyListForInsert = new linkedList();
emptyListForInsert.insertAt(1, 0);
console.log("Insert into empty list:", emptyListForInsert.toString()); // (1) -> null