// calculator.js

const args = process.argv.slice(2);

const num1 = parseFloat(args[0]);
const operator = args[1];
const num2 = parseFloat(args[2]);

function calculate(num1, operator, num2) {
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
           } else {
                return "Error: Cannot divide by zero.";
             }
            break;
         default:
            return "Error: Invalid operator.";
    }
    return result;
}

console.log("Result:", calculate(num1, operator, num2));
