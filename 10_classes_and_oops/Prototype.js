// let myName="sameer     "

// console.log(myName.truelength);




let myHeroes=["thor","spiderman"]

let heroPower={
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}








//heroPower.sameer()



//inheritence 


//old style
const User={
    name: "chai",
    email: "chai@gmail.com"
}
const Teacher={
    makeVideo: true
}

const TeachingSupport={
    isAvailable: false
}

const TASupport={
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__=User

//Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName= "Chaimera          "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
    
    
    
}
anotherUserName.trueLength()




