//write a function that returns reverse of a string 

//1

function reverseString(str) {
    let revStr = "";

    for (let i = str.length -1; i >= 0; i--) {
        revStr += str[i]
    }
    return revStr;
}

console.log(reverseString("interview, happy"));

//2
function reverseString1(str) {
    //split the string into array of characters
    //reverse array
    //join the characters back into the string
    return str.split("").reverse().join("");
}
console.log(reverseString1("reverse string"));