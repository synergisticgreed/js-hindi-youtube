class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
    static createId(){
        return `123`
    }
}
const same=new User("same")
console.log(same.createId())


