// Intersection of two arrays without using for loop
console.log(findIntersection([1, 2, 3, 4,], [2, 3, 5, 6]));
function findIntersection(arr1, arr2) {
 // Step 1: Use the Set data structure to store unique elements from the first array
 let set = new Set(arr1);
 // Step 2: Use the Array.filter() method to create an array of common elements
 let intersection = arr2.filter(function (element) {
 return set.has(element);
 });
 return intersection;
}
// Output: [2, 3]


