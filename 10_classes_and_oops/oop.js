const user={
    username: "Sameer",
    logInCount: 8,
    signedIn: true,


    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
        console.log(this);
        
        
    }
}


//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);     // here {} will print in case of node
//but in browser , window object will print





// const promiseOne=new Promise()








function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    //return this;   //bydefault return 
    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
        
    }

}

const userOne=new User("Sameer",12,true)
const userTwo=new User("Github", 11, false)
console.log(userOne.constructor);    //print [Function: User]
//console.log(userTwo);



//instance of











