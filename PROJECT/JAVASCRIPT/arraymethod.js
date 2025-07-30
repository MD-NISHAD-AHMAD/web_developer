let array =[1, 2, 6, 4, 5, 3];
console.log('-->array:', array[0]);


//console.log(aaray.findindex(value) ==> value === 3));

  console.log(array.indexOf(5));


  // map ---->[]
  //@ filter --> [reduce the conditional value];

  let arr = [2, 3, 1, 7, 5, 99, 100, 10, 125];

  //arr.sort((a, b) ==> a - b);

  //arr.splice(4, 0, 2);


  let ans = arr.slice(3, 6);

  console.log('-->ans:', ans);

  let arr1= arr.join(' ');
  console.log('-->arr1:', arr1);

  let arr2 = arr1.split(" ");
  console.warn('--> ~ arr2:', arr2);

  let array1 = [1, 2, 3, 4, 5];
  //array.pop();

  array1.push(6, 7, 8, 9, 10);
  console.warn('--> array1;', array1);

  //whatis 'from' do.















  let str ='hello';
  const arrs = Array.from(str);

  console.warn('---> ~ arrs:', arrs);


// what is 'some' do.


                















const number = [1, 2, 3, 4, 5];

const hasEvenNumber = number.some((num, i, arrs) => num % 2 === 0);
console.warn('---> ~ hasEvenNumber:', hasEvenNumber);

const allpositive = number.some(number => number > 0);
console.warn('---> ~ allpositive:', allpositive);


//example of array in js.



const arrayEmpty = new Array (2);
console.warn('---> ~ arrayEmpty:', arrayEmpty);


console.log(arrayEmpty.length);
console.log(arrayEmpty[0]),
console.log(0 in arrayEmpty);
console.log(1 in arrayEmpty);

  

