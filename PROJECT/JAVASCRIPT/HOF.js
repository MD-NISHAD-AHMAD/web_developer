let array = [1, 2, 3, 4, 7, 6, 7, 6, 9];

let string =['mehfooz', 'nishad', 'sai', 'farhan', 'khushi'];

//# map some as loop but it will return as array

let arr2 = string.map((element, index, array) => {
    let elements = element ===! 'sai'
    let obj = {
        el: element,
        i: index,
    }
    return obj

});

console.log('---> arr2:', arr2);


//# filter some as loop but  it will return as array but delete/remove the match element which you given

let arr = array.filter((element, index) => element == 7);
//[1, 2, 3, 4, 6, 6, 9]
console.log('--> arr:', arr);



//# foreach same as loop but it will never return as array, its show undefine 


let arr1 = array.forEach((element) => {
  console.log('--> element:', element);
  return element;
});
console.log('--> arr1:', arr1);


//$ Reduce

let answer = array.reduce((acc, curr) => {
 return acc + curr;
}, 0);

console.log('--> answer:', answer);

// HOF creates a reducer for swimming a property 

const item =[
    {name: 'Book', price: 300},
    {name: 'Pen', price: 50},
    {name: 'Notebook', price: 150},
];

const createsumreduce = (prop) => {
  return (acc, obj) => acc + obj[prop];
};

const totalprice = item.reduce(createsumreduce('price'), 0);

 console.log( totalprice); // output: 500


 const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

 const countfruits = fruits.reduce ((acc, fruits) => {
    acc[fruits] = (acc[fruits] || 0) + 1;
    return acc;
 }, {});

 console.log(countfruits);



 let str = 'hello world';


 let funcstr = str.split('');

 console.log('--> funcstr:', funcstr);

 
 const countstring = funcstr.reduce((acc, str) => {
    acc[string] = (acc[str] || 0) + 1;
    return acc;
 }, {});
 console.log('--> countstring:', countstring);




