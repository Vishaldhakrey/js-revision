const arr = [1, 2, 3, 4, 5];
for (ind in arr) {
    console.log(ind); //0,1,2,3,4,5
}
for (const num of arr) {
    console.log(num);
}

const person1 = {
    name: "Vishal",
    age: 23,
    rollnum: 24912,
    college: "DCE",
    location: "Gurugram"
}

for (ind in person1) {
    console.log(person1[ind]);
}


function sum(a, b, c = 0) {
    console.log(a + b + c)
}
sum(2, 3)  //5

//Restparameters

const names1 = ["Vishal", "Rahul", "Kaushal", "Priya", "Naman"];
names1.forEach((name, index, arr) => {
    //console.log(arr);
})

const names = ["vishal", "Rahul", "Ram", "vishal", "Ram", "Shyam", "Ram"]
const count = {};
names.forEach((name) => {
    if (count[name]) {
        count[name]++;
    }
    else {
        count[name] = 1;
    }
})
console.log(count);

function sum(a, b, c, ...other) {
    const ans = other.reduce((prev, item) => {
        return prev + item; // Ensure the return statement is present
    }, 0); // Start with an initial value of 0
    return a + b + c + ans;
}

const nums = [10, 20, 30, 40, 50]; // Modify nums to only hold additional numbers
console.log(sum(10, 10, 10, ...nums)); // Spread nums into individual arguments

//map
const obj = [
    {
        name: "laptop",
        price: 20000,
        count: 5
    },
    {
        name: "Phone",
        price: 10000,
        count: 2
    },
    {
        name: "Computer",
        price: 30000,
        count: 10
    }
]

const newProducts = obj.map((item) => {
    return {
        name: item.name,
        total: item.price * item.count
    }
})
console.log(newProducts);
const doubleNum = nums.map((num) => {
    return num * num;
});
function square(num, indx, arr) {
    return num * num;
}
function double(num, indx, arr) {
    return num * 2;
}
console.log(doubleNum);

const obj2 = {
    name: "vishal",
    age: 23,
    isTotallyAwesome: true
}

for (key in obj2) {
    console.log(obj2[key])
}
const obj = {
    a: "one",
    b: "two",
    a: "three"
}
console.log(obj);  //{ a: 'three', b: 'two' }

let nums = {
    a: 10,
    b: 20,
    c: 30,
    title: "My Nums"
}

multiplyByTwo(nums)

function multiplyByTwo(nums) {
    for (indx in nums) {
        if (typeof nums[indx] === "number") {
            nums[indx] = nums[indx] * 2;
        }
    }
}
console.log(nums);//{ a: 20, b: 40, c: 60, title: 'My Nums' }
console.log(typeof (3));

const a = {};
const b = { key: "b" }
const c = { key: "d" }
a[b] = 234
a[c] = 432
console.log(a);//{ '[object Object]': 432 }

const user = {
    name: "vishal",
    age: 34
}

const str = JSON.stringify(user)
console.log(JSON.stringify(user)) //{"name":"vishal","age":34}
console.log(JSON.parse(str)); //{ name: 'vishal', age: 34 }

console.log(..."vishal")//[ 'v', 'i', 's', 'h', ... ]
const user1 = { name: "Lydia", age: 23 }
const admin = { isAdmin: true, ...user } //{ isAdmin: true, name: 'vishal', age: 34 }

const settings = {
    username: "Piyush",
    level: 19,
    health: 90,
}
const data = JSON.stringify(settings, ["level", 'health'])

let user2 = {
    name: "Vishakl",
    age: 23,
    fullName: {
        first: "Piyush",
        lastName: "Agrawal"
    },
}
//const name = "Rahul"; //Error name alredy declared
const { fullName: { first } } = user2;
console.log(first);

console.log({ a: 1 } == { a: 1 }) //in ==, === , o/p false (they have deifferent memory location)

const value = { number: 10 }
const multiply = (x = { ...value }) => {
    console.log((x.number *= 2));
}
multiply() //20
multiply() //20
multiply(value) //20
multiply(value) //40

//deep copy / clone object
let user4 = {
    name: "vishal",
    age: 24
};
const objClone = Object.assign({}, user4);
const objClone = JSON.parse(JSON.stringify(user4))
const objClone = { ...user4 }
objClone.name = "Rahul"
console.log(objClone);//{ name: 'Rahul', age: 24 }
console.log(user4)//{ name: 'vishal', age: 24 }


//Shallow copy // reference of an object to another obj
const newObj = {
    name: "vishal",
}
const shalowObj = newObj; //{name: "vishal"}
shalowObj.name = "Rahul"
console.log(shalowObj);
console.log(newObj);
