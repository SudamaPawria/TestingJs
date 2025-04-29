// Sort an array without for loop
const numbers = [10, 1, 20, 2, 5];
console.log(sortArrayAscending(numbers));
// Output: [1, 2, 5, 10, 20]
function sortArrayAscending(arr) {
 // a and b will start from 10, 1 
 // If a-b is positive then swap
 // If a-b is negative or 0 then don't swap
 return arr.sort((a, b) => a - b);
} 


