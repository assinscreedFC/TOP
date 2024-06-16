
let anis="anis";
function capital(anis) {
   return anis=anis[0].toUpperCase() +anis.slice(1);
}
function reverse(anis) {
    return [...anis].reverse().join("");
}
function add(a,b){
return a+b;
}
function sub(a,b){
    return a-b;
}
function mux(a,b){
    return a*b;
}
function div(a,b){
    if(b===0){
        return "Error";
    }
    return a/b;
}


function ccesar(anis,value){
    let result="";
    for(let i=0;i<anis.length;i++){
       let chart= anis.charCodeAt(i);
       if(chart>=65 && chart<=90){
            if(chart+value>90){
                chart=64+(chart+value-90);
            }else{
                chart=chart+value;
            }
        }else if(chart>=97 && chart<=122){
            if(chart+value>122){
                chart=96+(chart+value-122);
            }else{
                chart=chart+value;
            }
        }
        result+= String.fromCharCode(chart);
    }
    return result;
}

function analyzeArray(tab) {
    const init=tab.reduce((acc,current)=>acc+current,0);
    let max=tab[0];
    let min=tab[0];
    tab.forEach(element => {
        if(element>max)
            {
                max=element;
            }
        if(element<min){
            min=element;
        }
    });
    return {
        sum:init,
        average:init/tab.length,
        max:max,
        min:min,
        length:tab.length 
    }
}
module.exports={
    capital,
    reverse,
    ccesar,
    analyzeArray,
    sub,
    div,
    mux,
    add
}
const object = analyzeArray([1,8,3,4,2,6]);
console.log(object);    
console.log(reverse("anis le bg")); // output: function upperCase() { [native code] }