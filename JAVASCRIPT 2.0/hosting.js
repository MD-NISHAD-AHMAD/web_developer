// immutable and other name primitive data type (call by value).
/* 
 STRING
 BOOLEAN 
 NUMBER
 */


let name1 ='Nishad';
let number = 22

let ans1= number[0]
console.log('---> ~ ans1:', ans1);

let ans=name1[0];
console.log('---> ~ ans:', ans);

ans="s";
console.log('---> ~ ans:', ans);

console.log('---> ~ name1:', name1);

let name = "ahmad"

console.log('---> ~ name:', name);

// mutable ---> non- primtive data type (call by refrence)

let arr=[1, 2, 3, 4];

let newData=arr[0];

arr[0]=5;

console.log(newData);

console.log('---> ~ arr:', arr);



let object ={
    name:'NISHAD'
}

object.name="AHMAD"

console.log(object);


for (var i=1; i<=2;i++) {
    console.log(i)
}


/* 
ARRAY
OBJECT
FUNCTION
 */