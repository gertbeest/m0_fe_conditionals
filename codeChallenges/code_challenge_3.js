// ## Spicy

// Write a JavaScript program that prints out a String or Number: The printed value will depend on the value of a Number. If the Number is a multiple of 3, print "Fizz". If the Number is a multiple of 5, print "Buzz". If the Number is a multiple of both 3 and 5, print "FizzBuzz". If the Number is not a multiple of either, print the Number itself.

var num = 20
if (num % 3 === 0 && num % 5 === 0) {
    console.log("Fizzbuzz")
} else if (num % 3 === 0) {
    console.log("Fizz")
} else if (num % 5 === 0) {
    console.log("Buzz")
}
