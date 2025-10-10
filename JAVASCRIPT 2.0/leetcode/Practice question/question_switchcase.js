/* basic question of switch case */
  
  
  // 1. take a number (1-7) print day of the week


let week = 5;
 switch (week) {
    case 1: 
    console.log('monday');
    break;
    case 2:
        console.log('tuesday');
        break;
        case 3:
            console.log('wednesday');
            break;
            case 4:
                console.log('thursday');
                break;
                case 5:
                    console.log('friday');
                    break;
                    case 6:
                        console.log('saturday');
                        break;
                        case 7:
                            console.log('sunday');
 }



 // 2. input a character .check if it is a vowels or consonants


let aplhabets = "a";
switch(aplhabets) {
    case "a":
        console.log( "vowels");
        break;
        case "e":
            console.log(' vowels');
            break;
            case "i":
                console.log(' vowels');
                break;
                case "o":
                    console.log(' vowels');
                    break;
                    case "u":
                        console.log(' vowels');
                        break;
                        default:
                        console.log('consonants');
}


// 3. take a month number (1-12). print the month name


let monthnumber = 7;

switch (monthnumber) {
    case 1:
        console.log("january");
        break;
        case 2:
            console.log("February")
            break;
            case 3:
                console.log("march");
                break;
                case 4:
                    console.log("april");
                    break;
                    case 5:
                        console.log("may");
                        break;
                        case 6:
                            console.log("june");
                            break;
                            case 7:
                                console.log("july");
                                break;
                                case 8:
                                    console.log("august");
                                    break;
                                    case 9:
                                        console.log("september");
                                        break;
                                        case 10:
                                            console.log("october");
                                            break;
                                            case 11:
                                                console.log("november");
                                                break;
                                                case 12:
                                                    console.log("december");

                                                    default:
                                                        console.log("invalid month");
                            
        
}



// 4. input a number (1-4). print

// . 1---> Addition
// . 2---> Subtraction
// . 3---> Multiplication
// . 4---> Division


let choice = 3;

switch(choice) {
    case 1:
        console.log("Addition");
        break;
        case 2:
            console.log("Subtraction");
            break;
            case 3:
                console.log("Multiplication");
                break;
                case 4:
                    console.log("Division");
}



// 5. A user select a drink:
// C---> coffee
// T---> tea
// J---> juice
// W---> water


let select = "C";

switch(select) {
    case "C":
        console.log("you select coffee");
        break;
        case T:
            console.log("you select tea");
            break;
            case J:
                console.log("you select juice");
                break;
                case W:
                    console.log("you select water");
}

// 6. Input a grade (A, B, C, D, F). Print a message like excellent, good, etc



let grade = "C"

switch(grade) {
    case "A":
        console.log("EXCELLENT");
        break;
        case "B":
            console.log("very good");
            break;
            case "C":
                console.log("GOOD");
                break;
                case "D":
                    console.log("AVERAGE");
                    break;
                    case "F":
                        console.log("fail");
    
}

// 7.input the first letter of a traffic light (R, Y, G).print stop ready or go


let light = "Y";

switch(light) {
    case "R":
        console.log("STOP")
        break;
        case "Y":
            console.log("READY");
            break;
            case "G":
                console.log("GO");
}



// 8. input a browser name (chrome, firefox, edge, safari). show a launch message.

let browser = "edge";

switch(browser) {
    case "chrome":
        console.log("start chrome");
        break;
        case "firefox":
            console.log("start firefox");
            break;
            case "edge":
                console.log("start edge");
                break;
                case "safari":
                 console.log("start safari");    
}



// 9. input a number (1-3).print
// 1---> circle area
// 2---> square area
// 3---> triangle area


let area = 2;

switch(area) {
    case 1:
        console.log("area of circle");
        break;
        case 2:
            console.log("area of square");
            break;
            case 3:
                console.log("area of triangle");
}


// 10. input a language code (en, fr, es, de).display the language names


let language = "es";

switch(language) {
    case "en":
        console.log("english");
        break;
        case "fr":
            console.log("france");
            break;
            case "es":
                console.log("spanish");
                break;
                case "de":
                console.log("german");
}


// Advance switch case question.

// 2. using the switch case display the name of the months when the user the enter the number(1-12) extend it also show how many
// days that months has, considering leap year for februray.




/* 3. create a menu driven program with switc case to stimulate at atm machine
(check balance, deposit, withdraw,, exit) */