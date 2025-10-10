let num1 = "3";
let num2 = 3;

let flag = true;

let andcondition= num1===num2 || num2 ==! num1+1;

console.log('~ andcondition:', andcondition);

console.log(flag);


// binary conversion


let number = 30;
let binaryconv = number.toString(16);
console.log('~ binaryconv:', binaryconv);

let octa_To_num = parseInt(binaryconv, 2);
console.log('~ octa_To_num:', octa_To_num);






let name = 'Nishad';
let surname = 'Ahmad';

let full_name = name + ' ' + surname;

let full_name1 = '${name} +${surname}'

console.log('~ full_name:', full_name);
console.log('~ full_name:', full_name);






let number1 =1;
// number1 =+ 2
// number1+=2

++number1
number1++

console.log('~ number1:', number1);


let nums=2;
let nums1="2";


// typeof




let typecheck = typeof nums;
console.log('~ typecheck:', typecheck);
let typecheck1 = typeof nums1;
console.log('~ typecheck1:', typecheck1);







let arr = [1, 2, 3, 4,[5, 6, 7, 8,[9, 10, 11, 12]]];
console.log('~ arr:', typeof arr);


let arr1 = [1, 2, 3, 4];

let arr2 = [5, 6, 7, 8, 9];

let newArr= [...arr1 ,...arr2];

console.log('~ newArr:', newArr);



const functions = (...args)=> {
console.log('~ args:', args);
}

functions(1, 2, 3)


// spread operatior



let arr7 =[1, 2, 3, 4, 5];

let newarr = [...arr7, 5, 6, 7, 8]

console.log('newarr:', ...newarr);


// rest operator

function naam(...args) {
    console.log(args)
}
