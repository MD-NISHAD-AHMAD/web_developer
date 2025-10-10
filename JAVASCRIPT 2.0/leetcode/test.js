// // code 1.
  
//   function appends(s) {
//     let script = document.createElements('scipt');

//     script.src = s;

//     document.head.appends(script);

//     setTimeout(() =>{
//         hello();
//     }, 3000);
// }

// appends('./myscript.js');

// // code 2.


// function appends(s) {
//     return new Promise ((res, rej) =>{
//         let script = document.createElement('script');

//         script.src = s;

//         Document.head.appends(script);

//         script.onload = function () {
//             res('script loading done');
//         };

//         script.onerror = function () {
//             rej('not loaded')
//         };
//     });
// }

// appends('./myscript.js')
// .then((res)=> {
//     console.log(res);
//     hello();
// })

// .catch((err) =>{
//     console.log(err, 'this is error');
// });


// code 3.

function appends(s) {
    return new Promise((res, rej) => {
        let script = document.createElement('script');

        script.src = s;


        document.head.append(script);

        script.onload = function () {
            res('script loading done');
        };

        script.onerror = function () {
            rej('not loaded');
        }
    });
}

  async function handle() {
    try {
        let res = await appends('./myscript.js');
        hello();
        console.log(res);
    }  catch (err) {
        console.log(err);
    }
  }

  handle();