// --map polyfill--
Array.prototype.myMap = function (cb) {
    let temp = []
    for (let index = 0; index < this.length; index++) {
        temp.push(cb(this[index], index, this))
    }
    return temp;
}
const arr1 = [1, 2, 3, 4, 5]

const doubleArr = arr1.myMap((num, i, arr) => {
    return num * 2;
})
console.log(doubleArr) //[2,4,6,8,10]

// --filter polyfill--
Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let index = 0; index < this.length; index++) {
        if (cb(this[index], index, this)) {
            temp.push(this[index]);
        };

    }
    return temp;
}
const arr1 = [10, 22, 31, 41, 50]

const doubleArr = arr1.myFilter((num, i, arr) => {
    return num % 2 == 0;
})
console.log(doubleArr)

// --reduce polyfill--

Array.prototype.myReduce = function (cb, initialValue) {
    let accumulator = initialValue;
    for (let index = 0; index < this.length; index++) {
        accumulator = accumulator ? cb(accumulator, this[index], index, this) : this[index];
    };
    return accumulator
}
const arr2 = [1, 2, 3, 4, 5]

const sum = arr2.myReduce((accumulator, curr) => {
    return accumulator + curr;
}, 0)
console.log(sum) //15

ForEach vs map()

const arr = [10, 23, 45, 12, 23];
const result1 = arr.map((num) => {
    return num * 2
})
const result2 = arr.forEach((num, i) => {
    arr[i] = num * 2
})
console.log(result1, result2, arr);

// students name in capital
const students = [
    { name: "Vishal", rollNo: 101, age: 20, marks: 85 },
    { name: "Rahul", rollNo: 102, age: 21, marks: 78 },
    { name: "Priya", rollNo: 103, age: 22, marks: 92 },
    { name: "Anjali", rollNo: 104, age: 20, marks: 88 },
    { name: "Rohan", rollNo: 105, age: 23, marks: 76 }
];
const newStudents = students.map((student) => student.name.toUpperCase())
const passedStudents = students.filter((student) => student.marks >= 80)
const sumOfMarks = students.reduce((acc, curr) => {
    return acc + curr.marks;
}, 0)
console.log(sumOfMarks);

