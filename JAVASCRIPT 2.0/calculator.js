let num_1 = 10;
let num_2 = 20;
let operator = "%";

function calc(...arr) {
    let n1 = arr[0];

    let n2 = arr[1];

    let s = arr[2];


    switch(s){
        case '+':
            return n1+n2;
            case '-':
            return n1-n2;

            case '*':
                return n1*n2;

                case '%':
                return n1%n2;

    }
}

let ans = calc(num_1,num_2,operator)

console.log('---> ~ ans:', ans);