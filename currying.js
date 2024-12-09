// Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument.

// Currying in JavaScript is a technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument. 
// In simpler terms, it means converting a function that takes multiple arguments into a sequence of functions that each take one argument at a time.

function curriedMultiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c
        }
    }
}

console.log(curriedMultiply(2)(3)(4));

const b = curriedMultiply(3);
const c = b(4);
const all = c(5);
console.log(all);


