// Check for Anagrams
console.log(areAnagrams("listen", "silent"));
function areAnagrams(str1, str2) {
 
 // Step 1: Split the strings into arrays of characters
 // Step 2: Sort the characters in each array
 const sortedStr1 = str1.split("").sort().join("");
 const sortedStr2 = str2.split("").sort().join("");
 // Step 3: Compare the sorted strings
 return sortedStr1 === sortedStr2;
}
// Output: true


