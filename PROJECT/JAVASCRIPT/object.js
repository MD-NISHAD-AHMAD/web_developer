// this is object

//template literal ---> '${}'


// object literal ---> {}


let car = {
    brand: 'toyata',
    model: '800',
    years: '2000',
     automation: {
        name: 'advance toyata',
        model: '1200',
        years: '1880',
    },
    myfunc: function () {
        console.log('hello');
    },
    hobbies: ['swimming', 'cycling', 'reading'],
    maried: false,
};

console.warn('---> ~ car:', car.maried);



// task 1 : create student object with nested address and grades


let student ={
    name: 'nishad',
    address: {
        city: 'bihar',
        zip: '843113',
    },
    grades: {
        english: '80',
        science: '65',
    }
};

console.warn('---> ~ student:', student.grades.english);



//  task 2 : create a person object properties name, age, gender 


let person = {
    name: 'nishad',
    age: '25',
    gender: 'male',
    greet: function () {
        console.log('hello, my name is ', this.name);
    }
};

console.warn('---> ~ person:', person.gender);