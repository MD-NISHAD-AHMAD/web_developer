/* In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It acts as a placeholder for a value that is not yet available but will be at some point in the future. 
Promises are primarily used to manage asynchronous code, such as:
API calls: Fetching data from a server.
File operations: Reading from or writing to files.
Timers: Operations like setTimeout or setInterval.
A Promise can exist in one of three states:
Pending:
The initial state, where the asynchronous operation is still in progress and has not yet completed or failed.
Fulfilled (or Resolved):
The state where the asynchronous operation completed successfully, and the promise now holds the resulting value.
Rejected:
The state where the asynchronous operation failed, and the promise holds the reason for the failure (an error object). */



//  promise took callback function and also took (resolve, rejected).


// $ ()==>{} // callback function.



// let ice_cream = new Promise((res, rej) => {
//     let got_ice_cream = false;
//     if (got_ice_cream) res(got_ice_cream);
//     else rej(got_ice_cream);
// });  // here i created new promises 

// console.log('---> ~ ice_cream:', ice_cream);

// // we started the promises.


// ice_cream
//    .then(() => {
//     console.log('eat ice cream');
//    })

//    .catch(() => {
//     console.log('call mommy');
//    });
   


//  ! what if we get delay to get the response

console.log('A');

let ice_cream = new Promise((res, rej) => {
    let got_ice_cream;
    console.log('B');

    /* $ setTimeout(()=> {}. delay) */

   setTimeout(() => {
    got_ice_cream = false;
    if(got_ice_cream) {
        res(got_ice_cream);
    }  else {
        rej(got_ice_cream);
    }
}, 3000);

console.log('C')

});

// we started the promises.


console.log('D');

console.log('---> ~ ice_cream:', ice_cream);


ice_cream

    .then(() => {
   console.log('eat ice cream');
})


   .catch(() => {
    console.log('call mommy');
   }) ;

   console.log('E')



// Example for try and catch.


