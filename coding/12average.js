// Average of an array
console.log(findAverage([1, 2, 3, 4, 5]));
function findAverage(arr) {
 // Step 1: Calculate the sum of the array elements
 let sum = 0;
 for (let i = 0; i < arr.length; i++) {
 sum += arr[i];
 }
 // Step 2: Divide the sum by the number of elements in the array
 let average = sum / arr.length;
 // Step 3: Return the average
 return average;
}
// Output: 3


