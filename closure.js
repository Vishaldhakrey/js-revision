// closures -> A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives a function access to its outer scope. 
// In JavaScript, closures are created every time a function is created, at function creation time

// Lexical scope-> Lexical Scope means a function looks for variables in its own scope first, then in the outer scopes, until reaches to global scope where it was defined.
var name = "Priya"
function Name() {
  function displayName () {
    console.log(name);
  }
  //displayName()
  return displayName;
}
Name()();
const func = Name();
func();

//scope chain 
//1.local scope --> 2.outer scope(parent scope) --> 3.global scope
let e=10;
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a+b+c+d+e
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)); //20

//withoput anonymous function
const num = 20;
function sum(a) {
  return function sum1(b) {
    return function sum3(c) {
      return function sum4(d) {
        return a+b+c+d+num;
      }
    }
  }
}
const sum1 = sum(10);
const sum3 = sum1(20);
const sum4 = sum3(30);
const ans = sum4(40)
console.log(ans) //120


function createBase (num) {
  return function (innerNum) {
    console.log(num+innerNum);
  }
}
var addSix = createBase(6);
addSix(10); //16
addSix(20) //26

//Time Optimization
function find(index) {
  let a = [];
  for (let i=0; i<100000; i++) {
    a[i] = i*i;
  }
  console.log(a[index])
}

console.time("6")
find(6);   //34ms
console.timeEnd("6")
console.time("12")
find(12)  //38ms
console.timeEnd("12")

function find() {
  let a = [];
  for (let i=0; i<100000; i++) {
    a[i] = i*i;
  }
  return function (index) {
    console.log(a[index])
  }
}

let closure = find()
console.time("6")
closure(6); 
console.timeEnd("6")
console.time("12")
closure(12)
console.timeEnd("12")

//Block scope and setTimeout
for (var i=0; i<3; i++) {
  function inner(i) {
    setTimeout(function log() {
      console.log(i)
    }, i*1000)
  }
  inner(i);
}

//closures to create a private counter
function Counter() {
  var _counter = 0;
  
  function add(value) {
    _counter+=value
  }

  function retrieve() {
    return "Counter = " + _counter;
  }

  return {
    add, 
    retrieve
  }
}

const c = Counter() 
c.add(10);
c.add(15)
console.log(c.retrieve());  //Counter = 25

//What is module Pattern
var Module = ( function () {
  function privateMethod() {
    //do something private
    console.log('Private Method');
    
  }

  return {
    publicMethod: function () {
      console.log('Public Method'); 
    }
  }
})();
Module.publicMethod(); //Public Method
Module.privateMethod(); //Module.privateMethod is not a function

//Make this run only once
let view;
function workInfo() {
  let called = 0;
  return function () {
    if( called>0 ) console.log("Already done")
    else {
      view = "Start"
      console.log('Just ' + view);
      called++;
    }
  }
}
let work = workInfo();
work() //'Just Start'
work() //'Already done'
work()  //'Already done'
work() //'Already done'
work() //'Already done'

//Once Polyfill

function once(func, context) {
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func=null;
    }
    return ran
  }
}

const hello = once((a,b) => console.log("Hello ", a, b))
hello(1,2) //Hello  1 2
hello(1,2)
hello(1,2)
hello(1,2)

//memoise polyfill
function myMemoize(fn, context) {
  let res = {};
  return function (...args) {
    var argCache = JSON.stringify(args);
    if (!res[argCache]) {
      res[argCache] = fn.call(context || this, ...args);
    }
    return res[argCache];
  }
}
const clumpsyProduct = (num1, num2) => {
  for (let i=1; i<=100000;i++) {}
  return num1 * num2;
}

const memozedClumpsy = myMemoize(clumpsyProduct)
console.time("First call")
console.log(memozedClumpsy(7890, 1234));
console.timeEnd("first call");

console.time("second call");
console.log(memozedClumpsy(7890, 1234));
console.timeEnd("second call");
