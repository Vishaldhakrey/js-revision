//functions
//first class function 
function square(num) {
    return num * num
}

function print() {
    console.log("Square is ", square(10));//[ 'Square is ', 100, λ: [...] ]
}
print()


//IIFE
    (function square(num) {
        console.log(num * num); //25
    })(5);
(function (x) {
    return (function (y) {
        console.log(x + y); //15
    })(5)
})(10)

//function scope
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i); //0,1,2,3,4 because let has block scope
    }, i * 1000)
}
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i); //5,5,5,5,5 because var has global scope
    }, i * 1000)
}

//callback function
function sum(x, y) {
    console.log(x + y) //50
}
function another(callback) {
    let x = 20
    let y = 30;

    callback(x, y)
    console.log('Another funtion');

}
another(sum)

callback()
function another(x) {
    setTimeout(() => {
        console.log(x)
    }, 2000)
    console.log("Another")
}
function sum() {
    setTimeout(() => {
        let x = 20;
        console.log(x)
        another(x)
    }, 1000)
    console.log("Sum")
}
sum()