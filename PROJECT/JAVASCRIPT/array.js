// Array

const array =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <array.length; i++){
    console.log(array[i]);
}

/* Question of array. */

/* MAP() */


// 1. Given an array of names, how would you return an array with all names in uppercase?


let names =["nishad", "ahamd", "khan"];
let upperNames = names.map(name => name. toUpperCase());

console.log(upperNames);


// 2. How can you convert an array of numbers into their squares?

let numbers = [2, 3, 4];
let squares = numbers.map(num => num * num);

console.log(squares);


// 3. You have an array of product objects. How would you create an array containing only the product names?

let products = [{name: "pen", price: 10},{name: "book", price: 150}];
let productsNames = products.map(products => products.name);

console.log(productsNames);


// 4. Given an array of strings, how can you return their lengths?

let words = ["apple", "banana", "orange"]
let length = words.map(word => word.length);

console.log(length);

// 5.  You have an array of birth years. How do you return an array of ages?

let birthYears = [2000, 1990, 2012];
let currentYear = 2025;
let ages = birthYears.map(Year => currentYear - Year);

console.log(ages);

/* FILTER() */

// 6.  Given an array of numbers, how would you return only the even numbers?

let  number = [1, 2, 3, 4, 5, 6];
let evenNumber = number.filter(num => num % 2 === 0);

console.log(evenNumber);


// 7. You have an array of words. How would you filter words that are longer than 5 characters?


let word = ["apple", "mango", "banana", "orange",];
let longWords = word.filter(word => word.length > 5);

console.log(longWords);

// 8. From an array of students with marks, how can you get students who scored above 75?

let students = [{name: "Ali", marks: 80}, {name: "abdul", marks: 90}, {name: "farhan", marks: 65}];
let toppers = students.filter(student => student.marks > 75);

console.log(toppers);



