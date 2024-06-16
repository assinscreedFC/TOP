
class node{
    constructor(key,value){
        this.key=key;
        this.value = value || null;
        this.nextNode = null;
    }
}
class linkedList{
        constructor(){
        this.head = null;
        }

        append(key,value){
            let tmp=null;
            if(this.head === null){
                this.head = new node(key,value);
            }else{
                    tmp = this.head;
                    while(tmp.nextNode!=null){
                        tmp=tmp.nextNode;
                }
                tmp.nextNode = new node(key,value);
            }
        }

        prepend(key,value){
            let temp=null;
            if(this.head === null){
                this.head = new node(key,value);
            }else{
                temp = new node(key,value);
                temp.nextNode = this.head;
                this.head = temp;
            }
        }

        showKeys(tab){if(this.head===null){
                console.log("head is null");
                return tab ;
            }
            
            let tmp = this.head;
            while(tmp!=null){
                tab.push(tmp.key);
                tmp=tmp.nextNode;
            }
            return tab;
        }

        showValues(tab){if(this.head===null){
            console.log("head is null");
            return tab ;
        }
        
        let tmp = this.head;
        while(tmp!=null){
            tab.push(tmp.value);
            tmp=tmp.nextNode;
        }
        return tab;
    }

    showAll(tab){if(this.head===null){
        console.log("head is null");
        return tab ;
    }
    
    let tmp = this.head;
    while(tmp!=null){
        tab.push({key: tmp.key, valeu: tmp.value});
        tmp=tmp.nextNode;
    }
    return tab;
}

    
        size(){if(this.head===null){
            console.log("head is null");
            return 0;
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
            return null;
        }
            let temp=this.head;
            while (temp.nextNode!=null) {
                temp=temp.nextNode;
            }
            return temp;
        }
        at(value){if(this.head===null){
            console.log("head is null");
            return false;
        }
            if(value>this.size()-1){
                return false;
            }else{
                let temp=this.head;
                for (let index = 0; index < value; index++) {
                    temp=temp.nextNode;
                }
                return temp.value;
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
        contain(key){if(this.head===null){
            console.log("head is null");
            return false;
        }
            let temp=this.head;
            while (temp!=null) {
                if (temp.key===key) {return true;}
                temp=temp.nextNode;
            }
            return false;
        }
        find(key){if(this.head===null){
            console.log("head is null");
            return null;
        }
            let temp=this.head;
            let count=0;
            while (temp!=null) {
                if(temp.key===key){
                    return count;
                }
                count++;
                temp=temp.nextNode;
            }
            return null;
        }
        toString(){if(this.head===null){
            console.log("head is null");
            return null;
        }
            let temp=this.head;
            
            let stringF="";
            while (temp!=null) {
                let string=`(${temp.key}: ${temp.value}) -> `;
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
        replace(key,value){
            if(this.head===null){
                throw new Error("list vide");
            }else{
                let temp=this.head;
                while (temp!=null) {
                    if(temp.key===key){
                        temp.value=value;
                        return;
                    }
                }
            }
        }
        removeAt(index){if(this.head===null){
            console.log("head is null");
            return;
        }
            let temp=this.head;
            if(index>this.size()-1){
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
export {linkedList};