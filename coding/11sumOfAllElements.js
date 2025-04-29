// Sum all elements
console.log(findSum([1, 2, 3, 4, 5]));
function findSum(arr) {
 // Step 1: Initialize the sum variable
 let sum = 0;
 // Step 2: Iterate through the array and add each element to the sum
 for (let i = 0; i < arr.length; i++) {
 sum += arr[i];
 }
 
 // Step 3: Return the sum
 return sum;
}
// Output: 15


