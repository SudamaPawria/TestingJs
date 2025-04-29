const numbers = [5, 10, 2, 8, 3];
console.log(findSecondLargest(numbers)); 
function findSecondLargest(arr) {
 // Step 1: Sort the array in descending order
 const sortedArr = arr.sort((a, b) => b - a);
 
 // Step 2: Pick the second number from start
 let secondLargest = sortedArr[1];
 return secondLargest 
}
// Output: 8



