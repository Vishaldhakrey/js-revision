//this -> referencing
console.log(this) //{}
this.a=10
console.log(this.a); //10

//object

const user = {
  name: "Vishal",
  age: 24,
  getDetails1: () => {
    console.log(this.name); //undefined in node environment and in browser give window
  },
  getDetails2: function () {
    console.log(this.name)    //'Vishal'
  },
  getDetails3() {
    const getName = () => console.log(this.name);  //'Vishal' - its find in outer funtion because that is a regular function
    getName();
  }
}
user.getDetails2()
user.getDetails3()

//Q->
const obj = {
  firstName: "Vishal",
  getName() {
    const firstName = "Rahul"
    console.log(this.firstName) //'Vishal'
  }
}
obj.getName()

function makeUser() {
  return {
    name: "Vishal",
    ref() {
      return this
    }
  }
}
let res = makeUser();
console.log(res.ref().name)  //'Vishal'

//Q->
const user1 = {
  name: "Vishal Singh",
  logMessage() {
    console.log(this.name);
  }
}
//setTimeout(user1.logMessage, 1000);  //undefined
setTimeout(function () {
  user1.logMessage()
}, 1000)     //'Vishal Singh'


//Q->
var length = 4;
function callback() {
  console.log(this.length);  //4 its pointing global object
  return this.length
}
const object = {
  length: 5,
  method(fn) {
    console.log(fn());
  }
}
object.method(callback);

//Q->made a calculator
const cal = {
  total:0,
  add(a){
    this.total+=a;
    return this
  },
  sub(a){
    this.total -=a;
    return this

  },
  mul(a) {
    this.total*=a;
    return this

  },
  div(a) {
    this.total/=a;
    return this

  }
}
const res = cal.add(10).mul(5).sub(30).add(10)
console.log(res.total); //30