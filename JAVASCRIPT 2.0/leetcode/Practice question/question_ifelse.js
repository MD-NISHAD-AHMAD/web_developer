/* If- Else questions */

// 1. check if a number is even or odd.

let number = 16;

if(number % 2 === 0) {
    console.log("Even");
}

else{
    console.log("Odd");
}

// 2.check if number is positive, negative, or zero.

let number1 = 10;

if(number1 > 0) {
    console.log("positive");
}
  else if (number < 0) {
     console.log("negative");
  }

  else{
    console.log("zero");
  }


// 3. find the greater between two  numbers.

let a = 5, b = 5;

if(a>b) {
    console.log(a + " is greater");
}
  else if(a <b) {
    console.log(b + " is greater");
  }

  else{
    console.log("both are equal")
  }

//  4. find the largest among the three number.

 let x = 8, y = 18, z = 13;

 if(x >= y && x >= z) {
    console.log("largest is " + x);
 }

  else if(y >= x && y >= z) {
    console.log("largest is " + y);
  }

  else{
    console.log("largest is " + z);
  }

//   5. check if a given year is a leap or not.

let year = 2021;

if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
     console.log("leap year");
}

  else {
    console.log("Not a leap year");
  }

// 6. A students score is given. print the grade based on marks.

let score = 75;

if (score >= 90 && score <= 100) {
    console.log("A")
}
  else if (score >= 80 && score <= 89) {
    console.log("B")
  }
   
  else if (score >= 70 && score <= 79){
    console.log("c")
  }

  else if (score <=60 && score <= 69) {
    console.log("D")
  }

  else{
    console.log("Fail")
  }

// 7. categorize a person by age:
// 0-12 -> child
// 13-19-> teen
// 20-59-> adult
// 60+-> senior

  let age = 26;

  if(age >= 0 && age <= 12) {
    console.log("child");
  }

  else if(age >= 13 && age <= 19) {
     console.log("teen"); 
  }

  else if(age >= 20 && age <= 59) {
    console.log("adult");
  }

  else if(age >= 60) {
    console.log("senior");
  }

  else{
    console.log("invalid age")
  }


// 8. check if a given character is a vowel or consonat.


let char = 'e'

char = char.toLowerCase();

if(
    char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u' 
) {
    console.log("vowel");
}

  else if(char >= 'a' && char <= 'z') {
    console.log("consonant")
  }

  else{
    console.log("not alphabet letter");
  }

// 9. check if a number is divisible by both 3 and 5.

 let number2 = 30;

 if(number2 % 3 === 0 && number2 % 5 === 0) {
    console.log("yes divisible by 3 and 5");
 }

 else {
    console.log("not divisible by both 3 and 5");
 }

// 10. A  temprature is given.print
// -< 10c-> cold
// 11-25c-> pleasant
// >= 25c-> hot


 let temp = 27;

 if (temp <= 10) {
    console.log("cold");
 }

 else if (temp >= 11 && temp <= 25) {
    console.log("pleasant");
 }

 else if (temp > 25) {
    console.log("hot")
 }