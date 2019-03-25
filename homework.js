// 1. Set the variable `givenName` to the string "Addison".

const givenName = 'Addison'


// 2. Set candies equal to 20, people to 6, and leftover equal
// to the remainder of dividing 20 by 6.

let candies = 20
let people = 6
let leftover = candies % people


// 3. Create a function called greeting that returns "Hello, <name>!",
// where <name> is the name given as an argument to the function.

function greeting(name){
    return `Hello, ${name}!`
}


// 4. Create a function called isOdd that, given a number, will
// return true if it is odd and false if it is not. An odd number is a
// number which, when divided by 2, has a remainder of 1 or -1.

function isOdd(x){
    let remainder = x%2
    if (remainder === -1 || remainder === 1) {
        return true
    }
    return false
}


// 5. Create a function called isEven that, given a number, will
// return true if it is even and false if it is not. An even number is a
// number which, when divided by 2, has a remainder of 0.

function isEven(x){
    let remainder = x%2
    if (remainder === 0){
        return true
    }
    return false
}


// 6. Create a function called fahrenheitToCelsius that takes a
// Fahrenheit temperature as an argument and returns the
// temperature in Celsius.

function fahrenheitToCelsius(x){
    return (x-32)*5/9
}


// 6. Create a function called celsiusToFahrenheit that takes a
// Celsius temperature as an argument and returns the
// temperature in Fahrenheit.

function celsiusToFahrenheit(x){
    return (x*9/5)+32
}


// 7. Create a function called fahrenheitToKelvin that takes a
// Fahrenheit temperature as an argument and returns the
// temperature in Kelvin. This function must use your previous
// fahrenheitToCelsius function.
// Absolute zero (0 K) is equivalent to −273.15 C.
// 1 degree Kelvin equals 1 degree Celsius.

function fahrenheitToKelvin(x){
    return fahrenheitToCelsius(x)+273.15
}


// 8. Create a function called lesser that takes two numbers as
// arguments and returns the lesser of them. This function should
// use an if/else statement.

function lesser(x, y){
    if (x<y){
        return x
    } else {
        return y
    }
}


// 9. Create a function called multigreeting that takes a name
// and a language code and returns a version of "Hello, <name>!"
// in the specified language. The supported languages and their
// translations are below.
//
// en - Hello, <name>!
// es - ¡Hola, <name>!
// fr - Bonjour, <name>!
// eo - Saluton, <name>!
//
// If any other language code is used, return nothing.

function multigreeting(name, lang){
    let greetingDict = {'en':'Hello', 'es':'¡Hola', 'fr':'Bonjour', 'eo':'Saluton'}
    if (lang in greetingDict){
        return `${greetingDict[lang]}, ${name}!`
    }
}


// 10. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(num_array){
    let running_total = 0
    for (let num of num_array){
        running_total+=num
    }
    return running_total
}


// 11. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

function average(num_array){
    if (num_array.length === 0){
        return undefined
    }
    let total = sum(num_array)
    let dividend = num_array.length
    return total/dividend
}


// 12. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum(num_array){
    let arrayCopy = num_array.slice(0)
    if (num_array.length === 0){
        return undefined
    } else if (num_array.length === 1){
        return num_array[0]
    } else {
        return lesser(arrayCopy.shift(),minimum(arrayCopy))
    }
}


// 13. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

function selectionSort(num_array){
    if (num_array.length < 2){
        return num_array
    } else {
        let arrayCopy = num_array.slice(0)
        let sorted_array = []
        
        for (let i = 0; i<num_array.length; i++){
            let smallest = arrayCopy.splice(arrayCopy.indexOf(minimum(arrayCopy)),1)
            sorted_array.push(smallest[0])
        }
        return sorted_array
    }
}
