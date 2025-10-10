/* Basic questions. */

// 1. Print numbers from 1 to 10 using a loop

let i = 1;
 while (i <= 10) {
    console.log(i);
    i++;
 }

// 2. Print all even numbers between 1 and 50.

 for (let i = 1; i <= 50; i++) {
    if (i % 2 ===0) {
         console.log(i);
    }
    
}

// 3. Print all odd numbers between 1 and 50.

 let odd = 1;

 while(odd <= 50) {
    console.log(odd);
    odd += 2;
 }

//  4. Print the multiplication table of 5.

  for (let i = 1; i <= 10; i++) {

  console.log(`5 x ${i} = ${5 * i}`);
}

// 5. Print numbers from 100 down to 1 (reverse order).

 for (let i = 100; i >= 1; i--){
    console.log(i);
 }


// 6. Print the sum of numbers from 1 to 100.

 let sum = 0;
 
 for (let i = 1; i <= 100; i++) {
   sum += i;
 }

 console.log("sum:", sum);

// 7. Print the square of the first 10 natural numbers.

 for (let i = 1; i <= 10; i++) {
   console.log(i * i);
 }

//  another approach

let square = 1;
while (square <= 10){
   console.log(square * square);
   square++;
}


// 8. Print the cube of the first 10 natural numbers.

for (let i = 1; i <=10; i++) {
   console.log(i * i * i);
}

// another approach.

let cube = 1;

while (cube <= 10) {
   console.log(cube * cube * cube);
   cube++;
}

// 9. Print the first 10 multiples of 3.

for (let i = 1; i <=10; i++) {
   console.log(3 * i);
}

// another approach.

let multi = 1;

while (multi <=10) {
   console.log(3 * multi);
   multi++;
}


// 10. Print the factorial of a given number.

let n = 6;

let factorial = 1;
 for (let i = 1; i <= n; i++) {
   factorial *= i;
 }

 console.log(factorial);