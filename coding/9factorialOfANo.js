// Calculate the factorial of a number
console.log(factorial(5)); //1*2*3*4*5
function factorial(num) {
 // Step 1: Handle edge case for 0
 if (num === 0) {
 return 1;
 }
 // Step 2: Initialize the factorial variable
 let factorial = 1;
 // Step 3: Multiply numbers from 1 to num to calculate the factorial
 for (let i = 1; i <= num; i++) {
 factorial *= i;
 }
 // Step 4: Return the factorial
 return factorial;
}
// Output: 120


