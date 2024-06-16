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

        show(){
            let tmp = this.head;
            while(tmp!=null){
                console.log(tmp.value);
                tmp=tmp.nextNode;
            }
        }
        size(){
            let count=0;
            let temp=this.head;
            while(temp!=null){
                count++
                temp=temp.nextNode;
                
            }
            return count;

        }
        Fhead(){
            return this.head;
        }
        tail(){
            let temp=this.head;
            while (temp.nextNode!=null) {
                temp=temp.nextNode;
            }
            return temp;
        }
        at(value){
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
        pop(){
            let temp=this.head;
            while (temp.nextNode.nextNode!=null) {
                temp=temp.nextNode;          
            }
            temp.nextNode=null;
        }
        contain(value){
            let temp=this.head;
            while (temp!=null) {
                if (temp.value===value) {return true;}
                temp=temp.nextNode;
            }
            return false;
        }
        find(value){
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
        toString(){
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
            let temp=this.head;
            if(index>list.size()){
                console.log("immposible taille trop grande");
            }else{
                let temptwo= new node(value);
                for (let inde = 0; inde < index-1; inde++) {
                    temp=temp.nextNode;
                
                }   
                temptwo.nextNode=temp.nextNode;
                temp.nextNode=temptwo;
            }
        
        }
        removeAt(index){
            let temp=this.head;
            if(index>list.size()-1){
                console.log( "immposible taille trop grande");
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

    let list= new linkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.prepend(4);
    list.show();
    list.removeAt(0);
    console.log(list.toString());