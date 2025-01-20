const user = {
    username: "sameer",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);
        
    }

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

//console.log(this);

const chai1 = function(){
    let username="sam"
    console.log(username);

}
//chai1()
const chai2 = ()=>{
    let username="sam"
    console.log(username);

}
//chai2()

// const addTwo = (num1,num2)=>{
//     return num1+num2        //correct
// }


//const addTwo = (num1,num2)=> num1+num2
// const addTwo = (num1,num2)=> (num1+num2)       //implicit return 
const addTwo = (num1,num2)=> ({username: "Same"})  



console.log(addTwo(2,6));

