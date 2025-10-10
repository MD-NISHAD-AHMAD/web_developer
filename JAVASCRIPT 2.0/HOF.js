let arr = [1, 7, 7, 3, 2, 7, 8, 4, 7, 0];

// map


let newArr =[];
    arr.map((elements, index, self) => {
    if(elements==! 7) {
        newArr.push(elements);
        return elements;
    };
})

console.log('---> ~ newArr:', newArr);

// filter method

let filterData=arr.filter((elements)=> {
    if(elements==! 7) return elements;
})

console.log('---> ~ filterData:', filterData);

// foreach

let newData=arr.forEach((Elements, index, self)=> {
    console.log('---> ~ elements:', Elements);
    console.log('---> ~ index:', index);
    console.log('---> ~ self:', self);
})

console.log('---> ~ newData:', newData);


// reduce

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let val = arr1.reduce((acc, cur)=>{
    return acc+=cur
},0);

console.log('---> ~ val:', val);


// HOF:  creates a reduce for summing property. 



const item =[
    {name: 'Book', price: 300},
    {name: 'Pen', price: 50},
    {name: 'Notebook', price: 150},
];

const createsumreduce = (prop) => {
  return (acc, obj) => acc + obj[prop];
};

const totalprice = item.reduce(createsumreduce('price'), 0);

 console.log( totalprice); 


 const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

 const countfruits = fruits.reduce((acc, fruit) =>{
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;

 }, {});

 console.log(countfruits);


 let str = 'masai';
 
 let funcstr = str.split('');
console.log('---> ~ funcstr:', funcstr);


const countstring = funcstr.reduce((acc, strings)=>{
    acc[strings] = (acc[strings] || 0) + 1;

    return acc;
}, {});

console.log('---> ~ countstring:', countstring);