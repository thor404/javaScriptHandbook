// ------ literals ---------

// 5
// 'Test'
// ['a', 'b']
// {color: 'red', shape: 'rectangle'}




// ------- identifiers -------

// an identifier is a sequence of characters that can be used to identify a variable, a function, an object. 
// it can start with letter the doller sign or an underscore

// Test
// test
// TEST
// _test
// Test1
// $test


// ---- variables -----

// a variable is a value assigned to an identifier , so you can referecne and use it later in the program

// var a = 0
// let a = 12
// const a = 15

// --------- Types -------

// Variable in javaScript do not have any type attached.

// in javaScript we have 2 main kinds of types: --- primitive ---- and object ----

// primitive types 
// - numbers
// - strings 
// - booleans 
// - symbols

// Object types:

// any value that's not of a primitive type is an  object 


// ------ Expression ------

// An expression is a single unit of javaScript code that the javaScript engine can evalute and return a value

// 2 
// 0.02
// 'something'
// true
// false
// this
// undefined
// null


// arthmetic expressions 

// 1 / 2
// i++
//  i -= 2
// i * 2

// 'A' + ' String'

// logical expression make use of logical operators and resolve to a boolean value:

// a && b
// a|| b
// !a



// --------- operators - -------

//  operators allow you to get two simple expressions and combine them to form a more complex expression

// let b = 2

// --------- The addition operator: --------

// const three = 1 + 2
// const four = three + 1


// ------- The subtraction operator: ----------

// const two = 3 - 1


// ----- the division operator: ------

// return the quotient of the first operator and the second:

// const result = 20 / 5
// const result = 20/ 7


// ----- The remainder operator % : ------

// const result  = 20 % 5
// const result = 20 % 7

// ------ The multiplication operator (*) ----------

// let a = 12
// let b = 3
// let sum = a * b


// --------- The exponentiation operator (**) ----------

// let a = 10
// let b = 2
// let expo = a **  b


// ---- precedence -------

// let a = 1 * 2 + 5 / 2 % 2


// * / % 
// + - 
// =

// example

// let a = 1 * 2 + 5 / 2 % 2
// let a = 2 + 5 / 2 % 22
// let a = 2 + 0.5
// let a = 2.5


// ------- comparisons ---------

// <  less than
// > greater than
// <= less than or equal to
// >= greater than or equal to


// ----- equality operators: -------

// === checks for equality
// !== checks for inequality



// ---- conditionals ----


// if 
// else if 
// else 



// if (true) {
    // do something
// }


// ------- String ---------

// A string is a sequence of characters

// ' A string ' 
// "Another string "



// ------ Arrays -------

// An array is a collection of elements
// arrays in javaScript are not a type on their own
// Arrays are objects

// const a = [] // empty array
// const a = Array() // builtin function


// const a = [1, 'tori', ['a', 'b']]


// Array(12).fill(0)

// push() // to add an item 
// pop() // to remove an item
// shift() // to remove an item from begining
// unshift()  // to add an item form beginning

// concat()  // to join two or more arrays
// find ()  // to find a specific item in the array







// ------ loops -------

// while loops
// for loops
// for of loops

// while:

// const list = ['a', 'b', 'c']
// let i = 0
// while (i < list.length){
//     console.log(list[i])
//     // console.log(i)
//     i = i + 1
// }

// syntax:

// while(true) {
//     if (somethingIsTrue) break
// }

// do while:

// const list = ['a','b','c']
// let i = 0
// do {
//     console.log(list[i])
//     i = i + 1
// }
// while (i < list.length)


// for loop:

// const list = ['shakil babu','ahm fahim morshed','shakil haque','arafat hossain','nayan']
// for (let i = 0; i < list.length; i++) {
//     console.log(list[i])
// }


// for ... of :

// const list = ['shakil babu','ahm fahim morshed','shakil haque','arafat hossain','nayan']

// for (const value of list) {
//     console.log(value)
// }


// ------- Funciton --------

// in any moderately complex javaScript program everything happens inside functions
// functions are core, essential prat of javaScript

// syntax:

// function getData() {
//     // do something 
// }


// A function can have one or more argument:

// function getData() {
//     // do something
// }

// function getData(color) {
//     // do something
// }

// function getData(color, age) {
//     // do something
// }

// ------- Arrow functions --------

// Arrow functions are a recent introduction to javaScript
// They are very often used instead of regular functions, the one i described in the previous chapter
// You will find both forms used anywhare

// function 

// function getData() {
//     // do something
// }

// arrow function 

// () => {
//     // do something
// }


// let getData = () => {
//     // ....
// }
// getData()


// const getData = () => console.log('hey')

// const getData = (param1, param2) => console.log(param1, param2)

// -------- Objects --------

// const car = {

// }

// builtin

// const car = new Object()

// const car = Object.create()

// const car = {
//     color : 'blue'
// }




// ---------- Object properties ----------

// const car = {
//     color: 'blue',
//     'the color' : 'blue'
// }


// object can have nested objects as properties:

// const car = {
//     brand: {
//         name: 'Ford'
//     },
//     color: 'blue'
// }






// ------------ Object methods ----------

// const car = {
//     brand : 'Ford',
//     model : 'Fiesta',
//     start : function() {
//         console.log('Started')
//     }
// }

// console.log(car.brand)
// car.start()



// ===================== OOP Comming sooon =================
// object oriented programming