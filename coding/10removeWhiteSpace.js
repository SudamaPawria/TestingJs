const inputString = " Interview, Happy ";
console.log(removeWhitespace(inputString));
function removeWhitespace(str) {
 
 // Step 1: Use a regular expression 
 // The \s pattern matches whitespace characters, 
 // including spaces, tabs, and line breaks.
 // The g flag is used to perform a global search 
 // and replace, replacing all occurrences.
 const result = str.replace(/\s/g, "");
 return result;
}
// Output: "Interview,Happy"


