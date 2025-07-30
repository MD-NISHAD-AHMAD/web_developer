const bodys= document.querySelector('body');

// api

const api ='https://fakestoreapi.in/api/products'

const Apicall = async ( url) => {
    try {
        let response = await fetch(api);
        let data = await response.json();
        userinterface(data)
        } catch (error) {
            console.error('--> ~ ApiCall ~ error:', error);

            
            }
            }


        // window. onload = Apicall()


        const UserInterFace = (value) => {
            const AllData = document.querryselector('#allData');
            value && value.forEach (element => {
                console.warn('---> ~ UserInterFace ~ element:', element);
                const div = document.createElement("div");
                const img = document.createElement("img");
                const id = document.createElement("h4");
                const description  = document.createElement("h5");
                const category = document.createElement("h6");
                const price = document.createElement("p");
                const title = document.createElement()


            }

        }