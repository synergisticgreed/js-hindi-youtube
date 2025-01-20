function hello(){
    //console.log("hello");
}
//hello()


function add(num1,num2){
    return (num1+num2);
    
}
result=add(3,7)
//console.log(result);


function loginUserMessage(username="Sam"){
    if(!username){
        return  ("please enter the username");
       
        
    }
    return `${username} just loggedin `
}
// let message=loginUserMessage("Sameer")
// console.log(message);

// let message=loginUserMessage()
// console.log(message);

//In a e-commerce website we dont know how many arguments we have 


function calculateCartPrice(...num1){
    return num1
}
price=calculateCartPrice(159,399)
//console.log(price);

// 

function handleobject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    

}


//Direct object passing
handleobject(
    {
        username: "darren",
        price: 199
    }
)

const mynewArray = [200,300,400]
function returnSecondValue(arr){
    return arr[1]
}
console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200,300,400,]));




