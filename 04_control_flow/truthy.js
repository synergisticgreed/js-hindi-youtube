//By default true and false

const userEmail="hello@gmail.com"
if(userEmail){
//console.log(userEmail);
    
}
else{
    //console.log("Don't have user email");
    
}



//falsy values------------------->

//false,0,-0,BigInnt 0n, "", null, undefined, Nan

//truthy values---------------------->

//"0", 'false', " ", [], {}, function(){}



const arr=[]
// if(!arr.length){
//     console.log("Array is empty");
    
// }

const object={}
if(!Object.keys(object).length){
    console.log("Object is empty");
    
}



//Nullish Coalescing Operator (??) : null undefined

let val1;
//val1 = 5??10
//database, firebase, appwrite 

//val1=null?? 10            //safety check of null when api is called
//val1=undefined ?? 15

val1=null?? 80??20
console.log(val1);     





//Ternary Operator

condition ?  true : false
