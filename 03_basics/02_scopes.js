if(true){
    //let a=1
    var b=2
    const c=3
}
//console.log(a)
//console.log(b)
//console.log(c);                            //always avoid var


// let a=300
// if(true){
//     let a=10
//     const b=20
//     console.log(a);
    
// }
// console.log(a);


function one(){
    const username="Sam"

    function two(){
        const website = "github"
    //  console.log(username);
        
    }
    //console.log(website);
    two()

    
}
one()







//***************************************************Intresting **********************************/
const result=addone(5)                         //can be used before initialisation
console.log(result);
function addone(num){                    //Traditional function
    return num+1
}


console.log(addTwo(6));                   //hoisting
const addTwo=function(num){            //Expression    , cannot be used before initialization
    return num+2
}
console.log(addTwo(6));




