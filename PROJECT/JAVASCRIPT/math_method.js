// using method.

// let number = 25;

// let ans = Math.pow(number, 3); // cubic value // 15625

//sqrt method.

// let number2 = Math.sqrt(number); // root value // 5
 

// without method.

// sqrt method related.
// "**" exponents opereator

// let number3 = 25;

// console.log('without inbuild', number3 ** (1 / 2));

// cubic roots.

// ceil
// 7.99--> 8
// 7.1--> 8

// let num1 = 7.6;


// floor.
// 7.1--> 7
//7.6--> 7

// let num3 = 7.6;

// let number7 = 125;
// console.log(Math.ceil(Math.pow(number7, 1 / 3)));

//random value generat:

// let num2 = 6.5;

// console.log('--> num2:', Math.round(num2));

// function randomNumber(x) {
//     console.log('--> randomNumber:', Math.round(Math.random() * x))

// }
// randomNumber(num2);

// log value.

// let num77 = 16;
// let num74 = 1;

// console.log(Math.log(num77) / Math.log(num74));
// console.log(Math.log2(num77));

// practice question for math method.

// Q.1-->  what does math.floor(4.9) return?

let num6 = 4.9;


console.log('--> num6:', Math.floor(num6));


// Q.2--> what is the output of  math.ceil(-2.3)? 


let num7 = -2.3;

console.log('--> num7:', Math.ceil(num7));


// Q.3--> Explain the result of math.round(3.5) and (3.4);

let a = 3.5;
let b = 3.4;

console.log("math.round(3.5) =", Math.round(a));
console.log("math.round(3.4) =", Math.round(b));


// Q.4--> what does math.abs(-9) do?

let num = -9;

console.log("--> num:", Math.abs(num));


// Q.5--> How can you find the maximum number from a set: 10,20,50,5?


let max = (10,20,50,5);

console.log("--> max:", Math.max(10,20,50,5));


// Q.6-->  what will math.min(0, -1, 5, 100) return?

let min = (0, -1, 5, 100);

console.log("--> min:", Math.min(0, -1, 5, 100));


// Q.7--> how do you generate a random number between 0 and 1?


let randomNumber1 = 0;
let randomNumber2 = 1;

console.log("math.random(0) = ", Math.random());
console.log("math.random(1) = ", Math.random());


// Q.8--> how would you create a random integer between 1 and 100?

 let start = 0;

 let end = 100;

 console.log("math.random(1,100) =", Math.floor(Math.random()));

 console.log("math.ceil(1,100) =", Math.ceil(Math.random()));



// Q.9--> how can math.random() be used in a dice roll simulation?


let diceRoll = Math.ceil(Math.random() * 6) + 1;

console.log("You rolled a " + diceRoll);




// Q.10--> what is the difference between Math.floor() and Math.trunc()?


let c = 3.7;

let d = 5.6;

console.log("math.floor(3.7) =", Math.floor(c)); // Output: 3
console.log("math.trunc(3.7) =", Math.trunc(d)); // Output:






