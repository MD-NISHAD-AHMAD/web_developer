let arr = ["flower", "flow", "flight"];

function prifix() {
    let jhola = arr[0];

    let jhola_length = jhola.length;

    for(let i=1;i<arr.length;i++){
        let currenString = arr[i];
        while(jhola !== currenString.substring(0, jhola_length)) {
            jhola_length--;
            if (jhola_length == 0) return "";
            jhola = jhola.substring(0, jhola_length);

        }
    }

    return jhola;
}

let ans = prifix();
console.log('---> ~ ans:', ans);