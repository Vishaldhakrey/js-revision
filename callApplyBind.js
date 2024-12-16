//Call()-> method that change context of invoking function that means 
//it allows us to set value of this explicitly(according to us)
//takes argument one by one

const obj = {
    name: "vishal",
    age: 23,
    details() {
        console.log(`${this.name} is a good boy`);
    }
}
const obj2 = {
    name: "Rahul"
}
obj.details.call(obj2) //'Rahul is good boy'
//
function func(age, city) {
    console.log(`${this.name} is ${age} old and lived in ${city}`);

}
//func.call(obj2, 23, 'Agra'); //'Rahul is 23 old and lived in agra

//apply() -> same as the call() method but argument pass in an array
//apply() immidiately invoke function
//func.apply(obj2, [24, "Delhi"]) //Rahul is 24 old and lived in Delhi

//bind() ->The bind() method in JavaScript is used to create a new function with a specific value for this and, 
//optionally, predefined arguments. Unlike call() and apply(), bind() does not immediately invoke the function; 
//instead, it returns a new function that can be called later.
const newFun = func.bind(obj2, 20, 'Jodhpur');
newFun() //Rahul is 20 old and lived in Jodhpur

//Q->
var status = "Smile";
setTimeout(() => {
    const status = "Laoughing";
    const data = {
        status: "serious",
        getStatus() {
            return this.status;
        }
    }
    console.log(data.getStatus()) //serious
    console.log(data.getStatus.call(this));   //'Smile' ->this never point to a funtion it will point context of that function

}, 0)

//Q->append an array to another array
let arr = [1, 2, 3]
let char = ['a', 'b', 'c'];
arr.push.apply(arr, char);
console.log(arr); //Array(6) [ 1, 2, 3, 'a', ... ]

//Q->min/max in an array using an apply()
const number = [10, 2, 23, 45, 1, 5]
console.log(Math.max.apply(null, number)); //45

//Q->
function f() {
    console.log(this); //window object -> context of this function is hard fixed
}
const user = {
    g: f.bind(null)
}
user.g();

//Q->bind chaining
function fn() {
    console.log(this.name);
}
const fnc = fn.bind({ name: "vishal" }).bind({ name: "Singh" });
fnc() //Vishal -> becuase once a function is bind to an object it always bind to that object
//bind chaining doesn't exist

//Q->Explicit binding with arrow fxn
this.age = 10;
var person = {
    name: "Piyush",
    age: 20,
    getAgeArrow: () => console.log(this.age),
    getAge: function () {
        console.log(this.age);
    }
}
const person2 = {
    age: 23
}
person.getAge.call(person2); //23
person.getAgeArrow.call(person2) //10


//polyfill for call() 
let car = {
    color: "Red",
    company: "Toyota"
}

function purchaseCar(currency, price) {
    console.log(`I have purchase ${this.color} - ${this.company} car for ${currency}${price}`);
}

Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + "Its not collable");
    }
    context.fn = this;
    context.fn(...args);
}
//purchaseCar.myCall(car, "R", 50000); //'I have purchase Red - Toyota car for R50000'

//polyfill for apply
Function.prototype.myApply = function (context = {}, args = []) {
    if (typeof this !== 'function') {
        throw new Error(this + "Its not collable");
    }
    if (!Array.isArray(args)) {
        throw new Error("passed argument in array");
    }
    context.fn = this;
    context.fn(args);
}

//purchaseCar.myApply(car, ["R", 30000]) //'I have purchase Red - Toyota car for R30000'

//polyfill of bind()
Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + "connot be bound as It's not collable");
    }
    context.fn = this;
    return function (...newArgs) {
        return context.fn(...args, ...newArgs);
    };
}
const bindFnc = purchaseCar.myBind(car, "R", 40000);
bindFnc() //I have purchase Red - Toyota car for R40000'

