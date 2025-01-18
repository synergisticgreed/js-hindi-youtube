//Primitive 


//7 types
// : String, Number, Boolean, null, undefined , symbol, BigInt 


// const id = Symbol('123')
// const anotherId= Symbol('123')
// console.log(id===anotherId);       //false;
// console.log(anotherId);

//Refernce type / Non Primitive

//Array, Objects, Functions


const heroes=["shaktiman","naagraj", "doga"]

let myObj={
    name:"rohit",
    class : "hello",
}

const myFun=function(){
    console.log("Hello World");
    
}
console.log(myFun());
console.log(typeof(myFun));






//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
Memory :
Stack
Heap






*/
// let myYoutubeName="Nitian Sameer"
// let anotherName=myYoutubeName
// anotherName="Hello"
// console.log(anotherName)
// console.log(myYoutubeName)



let user1={
    email : "hello@gmail.com",
    upi : "42367u3w"
}

let user2=user1
user2.email="hello@gmail.com"
console.log(user1)
console.log(user2)





