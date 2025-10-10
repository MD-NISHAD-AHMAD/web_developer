// // push

// let arr = [1, 2, 3, 4, 5, ]

// arr.push(6,7,8);
// console.log('🚀 ~ prototype.js ~ arr:', arr);

// Array.prototype.pushpa=function(...value){

//     for (let i = 0; i < value.length; i++); {
//     let index= this.length;
//     this[index]=value[i];
// }
// };

// arr.pushpa(9,10,11);
// console.log('🚀 ~ prototype.js ~ arr:', arr);


// pop

let arr1 = [1, 2, 3, 4, 5];
Array.prototype.निकालो = function () {
    let index = this.length - 1;
    delete this[index];
    this.length = index;
};
 arr1.निकालो();

console.log('--> arr1:', arr1);



