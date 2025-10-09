// let arr =[1, 2, 3, 4, 5];
// console.log("--> arr4:", arr[4]);

// // arr.push (5, 6);
// // console.log('--> arr:', arr);

// /* let obj = {
//   name = 'nishad',
// };

// console.log('--> obj:', typeof obj);

// */


// //  $ push


// Array.prototype.धकेलो = function (value) {
//     let index = this.length;
//     this[index] = value;
// };

// arr.धकेलो(7);

// console.log('--> arr:', arr);



// // $ Pop


// Array.prototype.निकालो = function () {
//     let index = this.length - 1;
//     delete this[index];
//     this.length = index;
// };

// arr.निकालो();

// console.log('--> arr:', arr);



// // $shift  


// Array.prototype.निकालो_शुरुआत = function (){
//   if (this.length === 0) {return undefined;
  
//     let firstElement = this[0];

//     // shift element to the left

//     for (let i = 0; i < this.length - 1; i++) {
//       this[i] = this[i + 1];
// }

// delete this[this.length -1];
// this.length -= 1;

// return firstElement;
// };
//   };



//   // Example usage:


//   let arr3 = [10, 20, 30, 40];
//   let removedElement =arr3.निकालो_शुरुआत();

 
//   // console.log(removedElement);

//   console.log('--> arr3:', arr3);



//   // $ unshift 

//   Array.prototype.आगे_डालो = function(...values) {
//     console.log('--> values:', values);
//     let newLength = this.length + values.length;

//     console.log('--> newLength:', newLength);

//     // 5 ----> 5-1 = 4



//     // shift existing elements to the right


//     for (let i = newLength - 1; i>= values.length; i--) {
//       this[i] = this[i - values.lenght];
//     }

//     // Add new elements at the begining  

//     for (let i = 0; i < values.length; i++) {
//       this [i] = values[i];
//     }

//     return this.length;
//   };


//   // Example usage:


//   let arr2 = [3, 4, 5];
//   arr2.आगे_डालो(1, 2);

//   console.log(arr2);



//   // $ 


/* TASK */

// 1. Car Example.


function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}


Car.prototype.start = function() {
  console.log(this.brand + " " + this.model + " start हो रही है...");
};


let car1 = new Car("Toyota", "Camry");
let car2 = new Car("Honda", "Civic");


car1.start(); 
car2.start();


// 2. Mobile Phone Example.

function mobile (brand, model) {
    this.brand = brand;
    this.model = model;
}

mobile.prototype.ring = function () {
    console.log(this.brand + " " + this.model + " is ringing ");
    ;
}

let phone1 = new mobile ("samsung", "galaxy s21");
let phone2 = new mobile ("Apple", "iphone 16 pro");

phone1.ring  ();
phone2.ring();

