let array= [1, 2, 6, 4, 5, 3];
let index = null;


// normal approach.

for (let i =0; i<array.length; i++){
    if(array[i]=== 5) index+= i
}

console.log(index);

// in-build approach.


let dataIndex=array.indexOf(5);
console.log('---> ~ dataIndex:', dataIndex);



let newIndex=array.findIndex((el)=>el===5);

console.log('---> ~ newIndex:', newIndex);


// # push or pop.

let array1= [1, 2, 3, 4, 5, 6];
array1.pop();
array1.push(9);
console.log('---> ~ array1:', array1);


// shift and unshift.

let array2 = [5, 6, 7, 8, 9];
array2.shift();

console.log('---> ~ array2:', array2);

array2.unshift(12);
console.log('---> ~ array2:', array2);


// delete.

let array3 = [10, 20, 30, 40, 50];
delete array3[2];
console.log('---> ~ array3:', array3);


// splice.

let newArr=array3.splice(2, 1, "nishad");
 console.log('---> ~ array3:', array3);


//  slice.

let addArr= array2.slice(2,3);

console.log('---> ~ array2:', addArr);

// 1. array.length
 
 
 let str = 'NISHAD AHAMAD '

let noSpacestr= str.replace(/ /g, "");
console.log("string:", str);

console.log("length of string:", str.length);

console.log("length without space:", noSpacestr.length);



// 2. array to string---> tostring achange the array to seperated comma.

let fruits = ["apple", "banana", "cherry"];

console.log("fruits:", fruits);

console.log("array as a string:", fruits.toString());


// 3. array at()---> we can take positive number and negative number from .at().

let str1 = [20, 30, 40, 50, 60];

console.log("str1:", str1);

console.log("str1:", str1.at(1));
console.log("str1:", str1.at(-1));


// 4. array join()---> .join() to change with custom operator into the string

let str2 = ["NISHAD", "ABDUL", "SHRYSHTY", "KARAN"]

console.log("str2:", str2);

console.log("str2:", str2.join(", "));

console.log("str2:", str2.join(" - "));

// 5. array pop().---> `.pop()` removes the last element of an array and returns it.
 

let name = ["KAJAL", "SREELEELA", "SONAKSHI", "SANIAA"]

console.log("name:", name);

console.log("name:", name.pop());

console.log("after pop:", name);

// 6. array push(). ---> .push(item) adds a new element to the end of the array.

let str3 = ["SHRYSHTY", "SAIQA", "RUMAISHA", "SADAF",];
str3.push("ROQAIYA");

console.log("str3:", str3); 


// 7. array shift().---> .shift() removes the first element of the array and returns it.


let str4 = ["CRICKET", "FOOTBALL", "VOLLEYBALL", "HOCKEY"];

console.log("remove element:", str4.shift());


console.log("str4:", str4);

// 8. array unshift()---> 

let str5 = ["BANANA", "APPLE", "GRAPES"];

str5.unshift("WATERMELON");

console.log("str5:", str5);