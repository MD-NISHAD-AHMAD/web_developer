let arr = [10, 30, 50, 80,80, 100, 20, 60, 40, 10];

let n = 5;

// i have to remove duplicates

arr = [...new Set(arr)];


arr= arr.sort((a,b)=> a-b);

if(n-1 > arr.length){
    console.log(`please enter the valid value and the value you put is not exist in array lenght...`);
}

else{
    arr[n-1];
    console.log(`---> ~ arr[n-1]:`, arr[n-1]);
}

console.log(`---> ~ arr:`, arr);