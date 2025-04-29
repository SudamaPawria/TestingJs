// A prime number is only divisible by 1 and itself.
console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false
function isPrime(number) {
 // Step 1: Numbers less than 2 are not prime
 for (let i = 2; i <= number / 2; i++) {
 // Step 2: Reminder must not be zero to be prime
 if (number % i === 0) {
 return false; // Number is divisible by i, hence not prime
 }
 }
 return true; // Number is prime
}


