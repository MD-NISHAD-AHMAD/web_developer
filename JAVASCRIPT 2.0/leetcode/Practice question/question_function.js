/* Basic function question */

// 2.write a function that takes two numbers as input and return their sum.

function addnumber(num1, num2) {
    return num1 + num2;
}

console.log(addnumber(25, 25));

// 3. create a function that checks if number is even or odd.

function checkEvenodd(num) {
    
    if (num % 2 === 0) {
        console.log("Even");
        
    }

    else {
        console.log("odd");
    }
}

checkEvenodd(6);
checkEvenodd(15);


// 4. write a function that convert celcius to fahrenheit.

function celciustofarenheit (celcius) {
    let fahrenheit = (celcius * 9/5) + 32;
    return fahrenheit;
}

console.log(celciustofarenheit(5));
console.log(celciustofarenheit(20));

// 5. write a function that returns the square of a number.

function square(num) {
    return num * num;
}

console.log(square(7));


// 6. create a function that takes a string and return its length.

function getstring(str) {
    return str.length;
}
 console.log(getstring("nishad"));


//  7. create a function to find the maximum of two numbers.

function findmax(num1, num2) {
    if(num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}


console.log(findmax(25, 40));


// 8. write a function that prints your names 5 times.


function printName() {
    for(let i = 1; i <= 5; i++) {
        console.log("nishad");
    }
}

printName();

// 2nd appraoch

function name() {
    console.log("nishad\n".repeat(5))
}

name();


// 9. write a function to calculate the area of a circle given its radius.

function areaofcircle (radius) {
    let area = Math.PI * radius * radius;
    return area;
}

console.log(areaofcircle(8));


// 10. write a function that takes an array and return the first element.

function getfirstElement (arr) {
    return arr[0];
}

const number =[50, 20, 60];

console.log(getfirstElement(number));