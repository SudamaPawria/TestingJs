
// Merge two arrays
const array1 = [10,3,5,7];
const array2 = [2,20,6,8];

console.log(mergeSortedArrays(array1,array2));

//output: [2,3,5,6,7,8,10,20]

function mergeSortedArrays(arr1,arr2){
//step 1: Concatenate the two arrays into a single array
const mergedArray = arr1.concat(arr2);

//step 2: sort the merged array in ascending order
const sortedArray = mergedArray.sort((a,b) => a-b);
return sortedArray
}