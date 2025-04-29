// Find largest Number
console.log(findLargestNumber([2, 4, 6, 9, 3]));
function findLargestNumber(arr) {
 // Step 1: Set the initial largest element to the first element of the array
 let largest = arr[0];
 // Step 2: Iterate through the array and update the largest element if a larger element is found
 for (let i = 1; i < arr.length; i++) {
 if (arr[i] > largest) {
 largest = arr[i];
 }
 }
 // Step 3: Return the largest element
 return largest;
}
// Output: 9


