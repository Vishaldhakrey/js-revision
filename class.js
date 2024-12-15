// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
    
//     encryptPassword(){
//         return (`${this.password}abc`);
//     }
    
//     getUserName() {
//         return (`${this.username.toUpperCase()}`)
//     }
// }

// const obj = new User("vishal", "vishal@gmail.com", 123);

// console.log(obj.encryptPassword())
// const obj1 = new User("rahul", "rahul@gmail.com", 133);
// console.log(obj.encryptPassword())

// console.log(obj1==obj)

// //behind the scene
// function UserDetails(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// UserDetails.prototype.encryptPassword = function () {
//     return (`${this.password}abc`)
// }

// UserDetails.prototype.getUserName = function () {
//     return (`${this.username.toUpperCase()}`)
// }

// const user1 = new UserDetails("vishal", "vishal@gmail.com", 123)

// console.log(user1.getUserName())


//Inheritance

class Students {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    
   userDetails(){
        return (`${this.username}, ${this.email} : `)
    }
    static getName(){
        return (`${this.username}`)
    }
}

class Subjects extends Students {
    constructor(username, email, password, subjects){
        super(username, email, password)
        this.subjects = subjects
    }
    
    getSubjects(){
        return (`${this.subjects}`)
    }
    
    
}

class Marks extends Subjects {
    constructor(username, email, password, subjects,marks){
        super(username, email, password, subjects);
        this.marks = marks
    }
    getMarks(){
        
        const total = this.marks.reduce((sum, marks) => sum+marks, 0)
        return (`${this.userDetails()}${total}`)
    }
}


const user1 = new Marks("vishal", "vishal@gmail.com", 123, ["Math", "Physics"], [23, 44]);

console.log(user1.getMarks())
// console.log(user1.getName())  



class User {
    constructor(username, email){
        this.username = username
        this.email = email
    }
    
    get email() {
        return (`${this._email.toUpperCase()}`)
    }

    set email(value) {
        this._email = value
    }
    get username() {
        return (`${this._username.toUpperCase()}abc`)
    }
    set username(value) {
        this._username = value;
    }
}

const obj = new User("vishal", "vishal@gmail.com")

console.log(obj.username)
console.log(obj.email)




function userProperty(email, username) {
    this._email = email
    this._username = username

    Object.defineProperty(this, "email", {
        get: function() {
            return this._email.toUpperCase()
        },
        set: function(value) {
            this._email = value
        }
    })
}

const user = new userProperty("vishal@gmail.com", "vishal")

console.log(user.email)






