// < --- currying-- ->|| Currying is a function that takes one argument at a time and returns a new function expecting the next argument. 
// It is a conversion of functions from callable as f(a, b, c)into callable as f(a)(b)(c).
// currying used-- >
//     makes a function pure
// helps in avoiding the same variable again and again.
// It is a checking method that checks if you have all the things before you proceed. 
// It divides one function into multiple functions so that one handles one set of responsibility.

function sum1(a) {
    return function sum2(b) {
        return function sum3(c) {
            return a + b + c
        }
    }
}
console.log(sum1(3)(2)) //b{return a+b+c}
console.log(sum1(1)(2)(3));

function evaluate(operation) {
    return function (a) {
        return function (b) {
            if (operation === 'sum') return a + b;
            else if (operation === "substract") return a - b;
            else if (operation === "divide") return a / b;
            else if (operation === "multiply") return a * b;
            else return "Invalid Operation"
        }
    }
}
console.log(evaluate("sum")(5)(2)) //7
console.log(evaluate("divide")(5)(2)) //2.5
const mul = evaluate("multiply");
console.log(mul(3)(4)); //12

//infinite currying
function add(a) {
    return function (b) {
        if (b) return add(a + b);
        return a;
    }
}
console.log(add(5)(4)(4)());

