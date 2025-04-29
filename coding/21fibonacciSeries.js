// The Fibonacci series starts with 0 and 1.
// Each subsequent number is the sum of the two preceding numbers.
// Generate Fibonacci series up to the 10th number
var n = 10;
console.log(fibonacciSeries(n));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
function fibonacciSeries(n) {
 // Step 1: Initialize the Fibonacci series with the first two numbers
 var fibonacci = [0, 1];
 // Step 2: Start from index 2, as the first two numbers are already defined
 for (var i = 2; i < n; i++) {
 // Step 3: Calculate the sum of the two preceding numbers
 fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
 }
 return fibonacci;
}

