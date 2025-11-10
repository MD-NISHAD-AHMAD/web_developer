let arr = [3, 5, 7, 9, 6];

let m = 5;

arr =arr 
      .map((el, i, arr) =>{
        return [Math.abs(arr[i] -m), arr[i]];

      }) .sort((a, b) => a[0] - [0])
      .map((el) => el[1]);
console.log('🚀 ~ dsa.js ~ arr:', arr);

     