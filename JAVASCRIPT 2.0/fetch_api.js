// sync way handle 

// let api = 'https://jsonplaceholder.typicode.com/posts'

// const apicalling = (url) => {

// fetch(url)
//  .then((response) => response.json())
//  .then((response) => { console.log(response); })
//  .catch((err) => { console.log(err); })

// }

// apicalling(api)


// async way handle

const BASE_URL = 'https://jsonplaceholder.typicode.com/albums'

const apicalling1 = async () => {

    try {
         let data = await fetch(BASE_URL);
    let res = await data.json();
    console.log("res:", res);
    } catch (error) {
        console.log("error:", error);
    }
}

apicalling1()



   

