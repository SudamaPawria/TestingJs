// Reverse the words of a sentence
console.log(reverseWords("hello world"));
function reverseWords(sentence) {
 // Step 1: Split the sentence into an array of words
 let words = sentence.split(" ");
 // Step 2: Reverse the array of words
 let reversedWords = words.reverse();
 // Step 3: Join the reversed words into a new sentence
 let reversedSentence = reversedWords.join(" ");
 // Step 4: Return the reversed sentence
 return reversedSentence;
}
// Output: "world hello"

