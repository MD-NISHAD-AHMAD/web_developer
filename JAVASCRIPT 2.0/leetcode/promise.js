// let ice_cream = new Promise ((res, rej) => {
//     let got_ice_cream = true;
//     if(got_ice_cream) res(got_ice_cream);
//     else rej(got_ice_cream);
// });

// console.log('---> ~ ice_cream:', ice_cream);

// ice_cream 
// .then(() =>{
//     console.log('got the ice cream');
// });

// ice_cream
// .catch(() =>{
//     console.log('not get!!')
// });

// // what if we get delay to get the response.+

// console.log('A');

// let ice_cream1 = new Promise((res, rej) => {
//     let got_ice_cream;
//     console.log('B');

//     /* $ setTimeout(()=> {}. delay) */

//    setTimeout(() => {
//     got_ice_cream = true;
//     if(got_ice_cream) {
//         res(got_ice_cream);
//     }  else {
//         rej(got_ice_cream);
//     }
// }, 3000);

// console.log('C')

// });

// // we started the promises.


// console.log('D');

// console.log('---> ~ ice_cream:', ice_cream1);


// ice_cream1

//     .then(() => {
//    console.log('eat ice cream');
// })


//    .catch(() => {
//     console.log('call mommy');
//    }) ;

//    console.log('E')


// // call back function.


// function sec() {
//     console.log("")
// }

// mainsec();

// function main(func) {

// }

 /* alo book */ 


let ola = new Promise ((res, rej) =>{
    let book_ride = false;
    if(book_ride) res(book_ride)
        else rej(book_ride);
});

console.log("ola", ola);

ola
  .then(() => {
    console.log("book_ride")
  });

  ola
  .catch(() => {
      console.log("ride_cancell???")
  })