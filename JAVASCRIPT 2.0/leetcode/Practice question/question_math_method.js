/* math method question */

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


// Random and Rounding //


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


/* Logic based an application */

// Q.11--> what is the output of math.pow(2, 3)

let ans1 = Math.pow(2, 3);

console.log("--> ans1:", Math.pow(2, 3));


// Q.12--> How do you get the square root of 49 in js?

let result = Math.sqrt(49);

console.log("--> result:", result);


// Q.13--> How do you get a number with only 2 decimal places after the division?

// Q.14--> How would you round a number to the nearest integer?

let num8 = Math.round(4.6);

console.log('--> num8:', Math.round(4.6));
