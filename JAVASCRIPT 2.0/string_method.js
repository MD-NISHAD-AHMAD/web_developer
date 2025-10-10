// 1. string length()---> To find length of string.

let str = "NISHAD"
console.log("string:", str);
console.log("length:", str.length);

// 2. Char At()---> Returns the character at a particular index.

let str1 = "NISHAD";

console.log("str1:", str1.at(3));


// 5. string Concat()---> to add two or more string

let str2 = "NISHAD";
let str3 = "AHMAD";

console.log(str2.concat(" ", str3));


// 6.string .At()

let str4 = "NISHAD";

console.log("str4:", str4.at(-1));


// 7. [] bracket notattion---> We can read the character of a string using Bracket Notation ([]).
//  But we cannot change the character using it.


let str5 = "hello"
 console.log("str5:", str5[2]);


// 8. string.slice()---> To extract part of string.

let str6 = "JAVASCRIPT";

console.log("str6:", str6.slice(0, 4));


// 9.string . substring()---> behave like slice but it cannot support negative index.

let str7 = "JAVASCRIPT";

console.log("str7:", str7.substring(4, 9));

// 10. string .substr()---> Substr is return the length character from the start index.

let str8 = "ENDOCRYNEGLAND";

console.log("str8:", str8.substr(0, 4));

// 11. string ToUppercase()---> it provides all the character in capital letter.

let str9 = "MONDAY";

console.log(str9.toUpperCase());

// 12. string  toLowercase()

let str10 = "MONDAY";

console.log(str10.toLocaleLowerCase());

// 15. string trim()---> it reomves whitespace back aor front

let str11 = "  Hello  ";

console.log(str11.trim());

// 16. string trimstart()---> Remove the initial whitespaces

let str12 = "    HELLO";

console.log("str12:", str12.trimStart());

// 17. string trimend()---. remove the last whitespaces

let str13 = "    HELLO      ";

console.log("str13:", str13.trimEnd());


// 20. string .repeat()---> repeat the string over and over again

let str14 = "NISHAD ";

console.log("str14:", str14.repeat(5));


// 21. string .replace()--->replace the first matching word

let str15 = " i love you";

console.log("str15:", str15.replace("you", "her"));

// 22. string . replaceAll()---> replace all matching words

let str16 = "i love you and you";

console.log("str16:", str16.replaceAll("you", "food"));


// 23. string .split()

let str17 = "A, B, C, D, E";

console.log("str17:", str17.split(","));

