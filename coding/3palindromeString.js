// Check for Palindrome
console.log(isPalindrome("racecar")); 
function isPalindrome(str) {
 // Step 1: Reverse the string
 const reversedStr = str.split("").reverse().join("");
 // Step 2: Compare the reversed string with the original string
 return str === reversedStr;
}
// Output: true

