console.log(name);

var name="nishad ahmad"

console.log(name);


// position of assign understanding this concept

var number;

number="10"

console.log(number);




// variable leakage in var key word

 var anotherValue = "topic";

for (var i = 0; i < 5; i++) {
    console.log(anotherValue);
    console.log(i);
}

//leakage handle by let keyword//

let another_value2="topic";

for(let j=0;j<6;j++){
    console.log(another_value2);
    console.log(j);
}

/* console.log(j); */




/* Data types */


/*  Data types in js classfy the different kind of of values variable can hold.   */


// primitive data type[immutabble]
/* String
number
Boolean
null
undefined
BigInt
Symbol
 */
// non primitive data type[mutable]
/* Object
Array
 */
// primitive data types [immutabble]


let naam="farhan";
console.log(naam);

naam="nishad"
console.log(naam);


// non primitive datat types (mutabble)

let data=["abdul", "ayaan", "nishad", "saima"];

data[3]="saniaa"


console.log(data);



// const keyw-word

const naam33="nishad";

console.log(naam33);

naam33="saima";

console.log(naam33);