let number_1 = 0;
let number_2 = 5;

function annualday (a, b){
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


/* 
() paranthesis
{} braces
[] bracket
 */

/* add two numbers */
function sum(a, b){
    console.log(a+b);
}

sum(3,5);


