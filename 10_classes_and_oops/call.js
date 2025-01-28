function SetuserName(username){
    //complex DB calls
    this.username=username
    console.log("called");
    
}

function createUser(username, email, password){
    SetuserName.call(this,username)
    this.email=email
    this.password=password
}

const chai=new createUser("chai", "chaio@fb.com", "123")
console.log(chai);
