// A closure in JavaScript is a function that remembers and has access to variables from its outer scope even after the outer function has finished executing
// A closure in JavaScript is a combination of a function and the lexical environment.
// Closures are used to modify data or variables safely.

// difference between noraml functino and closure
// Regular functions do not retain access to their reference variables after execution completes.
// Closures retain access to their reference variables event after execution completes.



function outerFunction () {
const value = "some value";

return function () {
    console.log(value);
}

}

const clousure = outerFunction();
clousure();

function outerFunction1 () {
    let count = 0;
    
    return function () {
        count++;
        console.log(count)
    }
    
    }
    
const clousure1 = outerFunction1();
    clousure1();

    const clousure2 = outerFunction1();
    clousure2();

//     Benefits of Closures:
// Closure can be used for data modification with data privacy(encapsulation) 
// Persistent Data and State - Each time createCounter() is called, it creates a new closure with its own separate count variable.
// Code Reusability - The closure returned by createCounter() is a reusable counter function. 

// disadvantages 
// Memory Leaks - If closures are not properly managed, they can hold onto unnecessary memory because Closures retain references to the variables they access.

// You can release the reference to the closure by setting closure to null.
// clousure1=null