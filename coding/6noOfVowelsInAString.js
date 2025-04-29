// Count the Vowels
console.log(countVowels("Hello, world!"));
function countVowels(str) {
 const vowels = ["a", "e", "i", "o", "u"];
 let count = 0;
 // Step 1: Iterate through each character in the string
 for (let char of str.toLowerCase()) {
 // Step 2: Check if the character is a vowel
 if (vowels.includes(char)) {
 // Step 3: If true, increment the count
 count++;
 }
 }
 return count;
}
// Output: 3

