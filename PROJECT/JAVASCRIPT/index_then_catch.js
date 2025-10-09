// let api1 = 'https://jsonplaceholder.typicode.com/posts'

// const apicalling = (url) => {
 
//     fetch(url)
//     .then((response) =>  response.json())
//     .then((response) => { console.log(response); })
//     .catch((err) => { console.log(err); })


// }

// apicalling(api1)

// photos

// let api2 = 'https://jsonplaceholder.typicode.com/photos'

// const apicalling = (url) => {

//     fetch(url)
//     .then ((response) => response.json())
//     .then((response) => { console.log(response); })
//     .catch((err) => { console.log(err); })
// }


// apicalling(api2)


// $ todos 

// let api3 = 'https://jsonplaceholder.typicode.com/todos'

// const api calling = (url) => {

//     fetch(url)
//     .then((response) => response.json())
//     .then((response) => { console.log(response); })
//     .catch((err) => { console.log(err); })
// }


// api calling(api3)



// $ Albums


// let api4 = 'https://jsonplaceholder.typicode.com/albums'

// const apicalling = (url) => {

//      fetch(url)
//      .then((response) => response.json())
//      .then((respone) => { console.log(respone) ;})
//      .catch((err) => { console.log(err);})
// }

// apicalling(api4)


// $ Carts

let api5 = 'https://dummyjson.com/carts'

const apicalling = (url)  => {

    fetch(url)
    .then((response) => response.json())
    .then((response) => { console.log(response); })
    .catch((err) => { console.log(err);})
}

apicalling(api5)
