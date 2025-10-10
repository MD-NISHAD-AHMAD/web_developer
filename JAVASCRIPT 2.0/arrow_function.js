let number_1 = 0;
let number_2 = 5;

const annualday = (a, b)=>{
    console.log('---> ~ a:', a);

    if(a<b){
        return 'this is the greater than b and the value of a is ${a}';
    }

    else{
        return 'this is the greater than a and the value of b is ${b}';
    }
}


let ans = annualday(number_1,number_2);
console.log('---> ~ ans:', ans);


// modern javascript ----> add two numbers

const arrowsum=(a, b)=>{
     console.log(a+b);
}

arrowsum(4, 5);


// subtraction function.

const arrowsub=(a, b)=>{
    console.log(a-b);
}

arrowsub(4, 5);



// multiplication function.

const arrowmul=(a,b)=>{
    console.log(a*b);
}

arrowmul(4, 5);


// division function.

const arrowdiv=(a, b)=>{
    console.log(a/b);
}

arrowdiv(15,5);
