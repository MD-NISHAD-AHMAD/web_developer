/* Arithmetic operators 8 */

/*
+ Addition
- subtraction
* Multiplication
/ Division
% Modules
** Exponentional (eg: = 2**3=8)
++ increment
-- decrement
*/


//using basic maths:-


//  let num1=4;
// let num2=2;

//  let sum=num1+num2;

// num1++
// num2--

//  console.log(num1++);
//  console.log(num2--);

// Assignmet operators

/*
---> Assign
+= ---> add and assign
- = ---> subtract and assign
* = ----> multiply and assign
/ = ----> divide and assign
% = ---> module and assign

*/


// let num3 = 4;

// num1 %= 2;

// console.log(num1);

/* comparison operators */


// let num5 ="2";
// let num4 =4;


// console.log("checking:", num5 ==num4);


// console.log(typeof num4);
// console.log(typeof num5);



// let flag1=false;


// console.log(flag1 !==true);


/* task*/

// let num6 =10;
// let num7 =12;

// console.log("checking:", num6>num7);


// let num8 =13;
// let num9 =14;

// console.log("checking:", num8<num9);


// let num10 =15;
// let num11 =18;


// console.log("checking:",num10 >= num11);


// let num12 =21;
// let num13 =20;

// console.log("checking:", num12 <= num13);


/* logical operator  */

/* && ---> AND operator
\\ ---> OR operator
! ---> NOT operator
*/


// And operator

// console.log(num13 == num12-1 && num11 == num10 );



//OR operator

// console.log(num8 == num9 -1 || num11 == num10);


// NOT operator

// let flags = false;
// console.log("flags:", !true);



/* string operator */

/*

+ ---> concatination
+= ---> append
*/


// let name1 ="nishad";
// let name2 = "ahmad";

//let full_name = name1 + " " + name2;



// name1 += " " + name2;
// console.log(" name1:", name1);


/* conditinal (ternianry) operator */

// let valcheck = 1 < 18 ? "true" : "false";
// console.log("valcheck:", valcheck);


// let age =20;

// console.log("you are elgible to vote"+ " " +(age >=18 ? "true" : "false"));


/* spread and rest operator */


// let arr =[1, 2, 3, 4];
// let newarr =[5, 6, 7, 8];

// let finalArr =[...arr, ...newarr];
// console.log("finalArr:", finalArr);




// here we have to use rest operator 


// const sum3 = (...args) => {

//     console.log("args:", args);
// };


// sum3(1, 2, 3);



// conversion into number to binary and binary to number


// let number= 58;

// let binaryconv = number.toString(8);

// console.log("binaryconv:", binaryconv);


// binary to number

// let bin_to_num = parseInt(binaryconv, 2);

// console.log("bin_to_num:", bin_to_num);



// conversion number to string  and string to number



let num33 = 88;
console.log("num33:", typeof num33);

let newData = num33.toString();
console.log("newData:", newData);
console.log("newData:", typeof newData);


let newData1 = string(newData);
console.log("newData1:", newData1);
console.log("newData1:", typeof newData1);

let newData2 = Number(newData1);
console.log("newData2:", newData2);
console.log("newData2:", typeof newData2);





