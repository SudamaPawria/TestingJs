const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings)); // Output: "fl"
function longestCommonPrefix(strs) {
 // Initialize the prefix with the first string
 let prefix = strs[0];
 // Iterate through the remaining strings in the array
 for (let i = 1; i < strs.length; i++) {
 // Find the common prefix between the current string and the prefix    
 while (strs[i].indexOf(prefix) !== 0) {
 // Remove the last character from the prefix until it matches
 // the beginning of the current string
 prefix = prefix.slice(0, prefix.length - 1);
 }
 }
 return prefix;
}


