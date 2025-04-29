// Check whether array is sorted or not
console.log(isSorted([1, 2, 3, 4, 5]));
function isSorted(arr) {
 // Step 1: Iterate through the array starting from the second element
 for (let i = 1; i < arr.length; i++) {
 // Step 2: Compare the current element with the previous element
 if (arr[i - 1] > arr[i]) {
 return false; // If the current element is smaller, the array is not sorted
 }
 }
 // Step 3: If all elements are in sorted order, return true
 return true;
}
// Output: true


