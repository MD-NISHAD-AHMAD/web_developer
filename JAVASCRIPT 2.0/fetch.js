const BASE_URL = 'https://official-joke-api.appspot.com/random_joke'

const apicalling = async () => {

    try {
         let data = await fetch(BASE_URL);
    let res = await data.json();
    alert(
        `id ${res.id}
        type ${res.type}
        setup ${res.setup}
        punchline ${res.punchline}
        `
    )
    console.log("res:", res);
    } catch (error) {
        console.log("error:", error);
    }
}

apicalling()