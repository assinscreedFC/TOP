import { linkedList } from "./link.mjs";

function hash(key,taille) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
 
    return hashCode % taille;
  }

  class HashMap {
    constructor() {
      this.bucketsArray = new Array(16).fill(null);
      this.loadFactor = 0.75;
      this.capacity = this.bucketsArray.length;
      this.occupied = 0;
    }
    resize(){
        let newCapacity = this.capacity * 2;
        let newBucketsArray = new Array(newCapacity).fill(null);
        this.bucketsArray.forEach((element,index)=> {
            newBucketsArray[index]=element;
        });
        this.capacity = newCapacity;
        this.bucketsArray=newBucketsArray;
    }

    set(key,value){
        if(this.occupied/this.length>=this.loadFactor){
            this.resize();
        }
        const _buckett=hash(key,this.capacity);
        if(this.bucketsArray[_buckett]===null){
            this.bucketsArray[_buckett]=new linkedList();
            this.bucketsArray[_buckett].append(key,value);
            this.occupied++;
        }else{
            if(this.bucketsArray[_buckett].contain(key)){
                this.bucketsArray[_buckett].replace(key,value);
            }else{
                this.bucketsArray[_buckett].append(key,value);
            }
        }
        
    }
    has(key){
        const _buckett=hash(key,this.capacity);
        if(this.bucketsArray[_buckett]===null){
            return false;
        }else{
           return this.bucketsArray[_buckett].contain(key);
        }
    }
    get(key){
        const _buckett=hash(key,this.capacity);
        if(this.bucketsArray[_buckett]===null){
            return null;
        }else{
           const find= this.bucketsArray[_buckett].find(key);
           if(find===null){
            return null;
           }else{
            return this.bucketsArray[_buckett].at(find);
           }
        }   
    }
    remove(key){
        const _buckett=hash(key,this.capacity);
        if(this.bucketsArray[_buckett]===null){
            return false;
        }else{
            const find =this.bucketsArray[_buckett].find(key);
            if(find===null){
                return false;
            }else{
                this.bucketsArray[_buckett].removeAt(find);
                return true;
            }
        }
    }
    length(){
        let taille=0
        this.bucketsArray.forEach(element=>{
            if(element!==null){
                 taille+=element.size();
            }
           
        });
        return taille;
    }
    clear(){
        this.bucketsArray=new Array(this.capacity).fill(null);
        this.occupied=0;
    }
    keys(){
        let tab=[];
        this.bucketsArray.forEach(element=>{
            if (element!==null) {
                tab=element.showKeys(tab);
            }
        });
        return tab;
    }

    Values(){
        let tab=[];
        this.bucketsArray.forEach(element=>{
            if (element!==null) {
                tab=element.showValues(tab);
            }
        });
        return tab;
    }
    entrer(){
        let tab=[];
        this.bucketsArray.forEach(element=>{
            if (element!==null) {
                tab=element.showAll(tab);
            }
        });
        return tab;
    }
}

let hashMap = new HashMap()

// // Ajouter des paires clé-valeur avec des chaînes de caractères plus longues
// hashMap.set("a_very_long_key_which_is_unlikely_to_collide", "value1");
// hashMap.set("another_long_key_with_unique_characters", "value2");
// hashMap.set("yet_another_key_that_is_quite_long_and_unique", "value3");
// hashMap.set("short_key", "value4");
// hashMap.set("medium_length_key_here", "value5");

// // Afficher le contenu de la HashMap
// console.log("After adding elements:");
// hashMap.bucketsArray.forEach((bucket, index) => {
//     if (bucket !== null) {
//         console.log(`Bucket ${index}: ${bucket.toString()}`);
//     }
// });

// // Vérifier l'existence de certaines clés
// console.log("Has 'a_very_long_key_which_is_unlikely_to_collide':", hashMap.has("a_very_long_key_which_is_unlikely_to_collide")); // true
// console.log("Has 'nonexistent_key':", hashMap.has("nonexistent_key")); // false

// // Récupérer les valeurs associées à certaines clés
// console.log("Get value for 'a_very_long_key_which_is_unlikely_to_collide':", hashMap.get("a_very_long_key_which_is_unlikely_to_collide")); // value1
// console.log("Get value for 'nonexistent_key':", hashMap.get("nonexistent_key")); // null

// // Ajouter plus d'éléments pour déclencher le redimensionnement
// hashMap.set("key6_with_a_long_name_to_trigger_resize", "value6");
// hashMap.set("key7_with_another_long_name", "value7");
// hashMap.set("key8_long_key_to_test_resize_functionality", "value8");
// hashMap.set("key9_long_key_value_test_case", "value9");
// hashMap.set("key10_with_even_longer_name", "value10");
// hashMap.set("key11_an_extremely_long_key_name_to_test_hashmap", "value11");

// // Afficher le contenu de la HashMap après redimensionnement
// console.log("After adding more elements and resizing:");
// hashMap.bucketsArray.forEach((bucket, index) => {
//     if (bucket !== null) {
//         console.log(`Bucket ${index}: ${bucket.toString()}`);
//     }
// });

// Ajouter des paires clé-valeur
hashMap.set("key1", "value1");
hashMap.set("key2", "value2");
hashMap.set("key3", "value3");
hashMap.set("key4", "value4");
hashMap.set("key5", "value5");

// Afficher le contenu de la HashMap
console.log("After adding elements:");
hashMap.bucketsArray.forEach((bucket, index) => {
    if (bucket !== null) {
        console.log(`Bucket ${index}: ${bucket.toString()}`);
    }
});

// Vérifier l'existence de certaines clés
console.log("Has key1:", hashMap.has("key1")); // true
console.log("Has key6:", hashMap.has("key6")); // false

// Récupérer les valeurs associées à certaines clés
console.log("Get value for key1:", hashMap.get("key1")); // value1
console.log("Get value for key6:", hashMap.get("key6")); // null

console.log("remove value for key1:", hashMap.remove("key1")); // trrue
console.log("remove value for key6:", hashMap.remove("key6")); // false

// Ajouter plus d'éléments pour déclencher le redimensionnement
hashMap.set("key6", "value6");
hashMap.set("key7", "value7");
hashMap.set("key8", "value8");
hashMap.set("key9", "value9");
hashMap.set("key10", "value10");
hashMap.set("key11", "value11");



// Afficher le contenu de la HashMap après redimensionnement
console.log("After adding more elements and resizing:");
hashMap.bucketsArray.forEach((bucket, index) => {
    if (bucket !== null) {
        console.log(`Bucket ${index}: ${bucket.toString()}`);
    }
});

console.log("the size is: ",hashMap.length());
console.log("show key: ",hashMap.keys());
console.log("show value: ",hashMap.Values());
console.log("show key/value: ",hashMap.entrer());