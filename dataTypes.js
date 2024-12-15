let a = null;
console.log(a)
console.log(typeof a); //Object

let b = 345;
console.log(b);
console.log(typeof b); //Number

let c = "vishal";
console.log(typeof c) //String

let sym = Symbol("This is a symbol");
console.log(typeof sym);

let bigInt = BigInt("567") + BigInt("5");
console.log(typeof bigInt)

let bool = true;
console.log(typeof(bool));

let und;
console.log(typeof und)  //undefined

console.log(undefined === null);
console.log(undefined == null)

if(!undefined){
  console.log('undefined falsey');
};
if(!null){
  console.log('null falsy');
}

function sum(a,b,c){
  console.log(typeof c); //undefined
  return a+b+c;   //NaN
}
console.log(sum(2,3));

const person = {
  name: "vishal",
  fullName : function(){
    console.log(`${this.name} Singh`);
    
  }
}
person.fullName()    //Vishal
console.log(person.age); //undefined

console.log(+ '7' + 7); //14
console.log('7'*1); //14
console.log(Number('77'));  //77
console.log(parseInt('vishal'));  //error