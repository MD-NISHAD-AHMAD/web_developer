let object ={
    name:'NISHAD',
    age:22,
    married:'false',
    hobbies:["cricket", "cooking", "dancing"],

    exp:{
        coName:'ahmad and co...',
        designation:'sde1',
        salary:'1lakh/ monthly'
    },

    myfunc:()=>{
        return this.name;
    }
}


let nnn=object.myfunc();
console.log(nnn);

console.log(object.name);
console.log(object.age);
console.log(object.married);
console.log(object.hobbies)



for(let key in object){
    console.log('${key} : ${object[key]}');
}


// & array [indexing]


let arr = [[1,2],3,4,5];

let arr1 = ["nishad", "ahmad", "nonu"];

let arr2 = [{name:"nishad", surname:"ahmad", nickname:"nonu"}];


for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}