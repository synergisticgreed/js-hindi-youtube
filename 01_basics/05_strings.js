const name = "Sameer"
const repoCount = 20
console.log(name+repoCount);     //Not recommended
console.log(`My name is ${name} . My repocount is ${repoCount}`);   //recommended




const gameName=new String("Same")    //string as a object
console.log(gameName[0])
console.log(gameName.__proto__)     //gives the type
//console.log(type(gameName))      //wrong
console.log(gameName.toUpperCase())
