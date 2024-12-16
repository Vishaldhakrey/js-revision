const nums = [10, 2, 3, 4, 5, 6, 7];

const TotalSum = nums.reduce((acc, value) => {
    if (acc > value) {
        return acc;
    } else {
        return value;
    }
}, -Infinity);

function callback(accumulator, value) {
    if (accumulator > value) {
        return accumulator;
    }
    else {
        return value
    }
}
console.log(TotalSum)


const participants = ["Ram", "rahul", "Kaushal", "Priya", "Sahil", "Vishal", "Ram", "Vishal"]

const winners = participants.slice(-3)
console.log(winners)

const count = {};
participants.forEach((name, index) => {
    if (count[name]) {
        count[name]++;
    } else {
        count[name] = 1;
    }
})
const sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
console.log(sorted)

const arr = [1, 2, 3, 4, 5, 6, 7];
const newArr = arr.splice(2, 3, 10, 20, 30)
console.log(arr);   //[1,2,10,20,30,6,7]
console.log(newArr);  //[ 3, 4, 5 ]

//sort
const numbers = [74, 18, 10, 5, 84, 24, 105];

numbers.sort();
console.log(numbers);

numbers.sort((a, b) => b - a)

const products = [
    {
        name: 'laptop',
        price: 1000
    },
    {
        name: "Phone",
        price: 3000
    },
    {
        name: "desktop",
        price: 10000
    }
]

products.sort((a, b) => b.price - a.price)
console.log(products)

//concat
const a = [1, 2, 3];
const b = [4, 5, 6, 7]
const c = a.concat(4, 5)
b.push(8, 9, 10)
console.log(c);
const d = [...a, ...b]
console.log(d);

//fill
const num = [1, 2, 3, 4, 5, 6];
num.fill(0, 1, -4);

function fillInNumber(n) {
    return Array(n).fill(0).map((_, indx) => indx + 1);
}
console.log(fillInNumber(10));
let arr1 = [10, 20, 30];
const newArr1 = arr1.fill(0).map((_, indx) => indx + 1)
console.log(newArr1);

includes

const participants = ["Ram", "rahul", "Kaushal", "Priya", "Sahil", "Vishal", "Ram", "Vishal"]
console.log(participants.includes('Vishal'));

join

const res = participants.join(', ');
console.log("I Know some persons like " + res);

reverse

const arr = [1, 2, 3, 4, 5, 6]
console.log(arr.reverse());
const str = "Coding is a good game to play";
console.log(str.split(" ").reverse().join(' '))

const names = ["vishal", 'singh', "dhakrey"]
const fullName = names.join(" ");
console.log(fullName);

push and pop
names.push("Rahul", "Priya");
console.log(names);
names.pop(2);
console.log(names);


names.unshift("Kaushal")
console.log(names);
names.shift()
console.log(names);

indexOf
const idx = names.indexOf("Rahul");
names[idx] = "Bhoot",
    console.log(names);
const newValue = names.at(2);
console.log(newValue);

const person = [
    {
        name: "Vishal",
    },
    {
        name: "Ram",
    },
    {
        name: "Rahul"
    },
    {
        surname: "Dahk"
    }
]

//every() => used to check the each and every element with an condition in a callback
//if any is false than return false array
const res1 = person.every((person) => person.name !== undefined)
console.log(res1);
const arr2 = [[1, 2, 3], [4, 5, 6], "123"]
console.log(arr2.every((arr) => Array.isArray(arr)))

const persons = [
    {
        name: "Vishal",
    },
    {
        name: "Ram",
    },
    {
        name: "Rahul"
    },
    {
        surname: "Dahk"
    }
]

//some() => used to check the each and every element in array with an condition in a callback
//if any true than return true
const ans = persons.some((person) => person.name !== undefined);
console.log(ans);

find()
const ans1 = persons.find((person) => person.name === "Vishal")
console.log(ans1);

findIndex
const values = [10, 20, 30, 40, 50]
const res2 = values.findIndex((value) => value == 30)
console.log(res2);

//From() => Convert Object into array(object, callback,)
const str1 = "123456123";
const numsArr = Array.from(str1, Number)
const numsArr = Array.from(str1, (x) => Number(x));
const unique = Array.from(new Set(numsArr));
console.log(unique)
console.log(numsArr);

isArray()
const str2 = "12344";
const result = Array.isArray(Array.from(str2, Number));
console.log(result);

flat()

const arr3 = [1, 2, 3, [4, 5, [6, 7], 8], 9]
const resut = arr3.flat(3);
console.log(resut);
