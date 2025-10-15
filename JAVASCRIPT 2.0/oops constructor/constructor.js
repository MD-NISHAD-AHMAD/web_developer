








// function car (make, model, year ) {
//     this.make = make,
//     this.model = model,
//     this.year = year
// } 

// below the this code called class constructor.

// class car {
//     constructor(make, model, year){
//     (this.make = make), (this.model = model), (this.year = year);
// }
// }

// const car1 = new car1 ('toyota', 'toyota', 1995);
// const car2 = new car2 ('bmw', 'sclass7', 2025);

// console.log('---> ~ car2:', car2);


/* reena */

const person = {
    name: 'reena',
    myFunc: function() {

        // this called function method bcz inside of object we write function
        console.log(this.name);

    },
};

person.myFunc();

/* eg. how is the owner of the global variable */

function myName() {
    console.log(this); // this will point to global scope variable and give global object...
}

myName();

console.log(this);

// so here we have to use 

// call--> so in call we execute the code this manner..

let person2 = {
    name: 'Nishad',
};

let person3 = {
    name: 'Abdul',
};


function myfunction (age,city) {
    this.age = age;
    this.city = city;
}

myfunction.call(person2, 22, 'mumbai');
console.log(person2);

// apply --> so in apply we execute the code this manner...

let person4 = {
  name: 'Shryshty',
};

let person5 = {
  name: 'Bushra',
};

function myfunction(age, city) {
  this.age = age;
  this.city = city;
}

myfunction.apply(person4, [19, 'nepal']);
myfunction.apply(person5, [24, '21']);
console.log('---> person4:', person4);
console.log('---> person5:', person5);

let person6 = {
  name: 'Mabiya',
};

let person7 = {
  name: 'Mehvish',
};

function myfunctions3(age, city) {
  this.age = age;
  this.city = city;
}

let myBind = myfunctions3.bind(person7, 21, 'kolkata'); //
console.log('🚀 ~ myBind:', myBind);

myBind(); // 

console.log(person7);
