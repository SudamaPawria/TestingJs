// Remove specific element without using for loop
console.log(removeElement([1, 2, 3, 2, 4], 2));
function removeElement(arr, target) {
 // Step 1: Use the Array.filter() method to create a new array with elements not equal to the target
 let filteredArray = arr.filter(function (element) {
 return element !== target;
 });
 // Step 2: Return the filtered array
 return filteredArray;
}
// Output: [1, 3, 4]


