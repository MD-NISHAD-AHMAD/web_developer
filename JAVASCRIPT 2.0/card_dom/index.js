const API_BASE_URL = `https://fakestoreapi.com/products`

  const product_fetch = () => {
    fetch(API_BASE_URL)
    .then((res) => res.json())
    .then((res) => Render_UI(res))
    .catch((err) =>  console.log(err))
    .finally(() => { console.log('api fecth finally')})
  }

  const Render_UI = (value) => {
    let mainDiv = document.getElementById("maincontainer");
    value.map((Element, index) => {
        let cardDiv = document.createElement('div');

        let img = document.createElement('img');
        let id = document.createElement('h5');
        let title = document.createElement('h3');
        let price = document.createElement('h4');
        let description = document.createElement('p');
        let category = document.createElement('p');


        img.src = Element.image;
        id.innerText = Element.id;
        title.innerText = Element.title;
        price.innerText = Element.price;
        description.innerText = Element.description;
        category.innerText = Element.category;

        // /class name assign..

        cardDiv.className = "card-div";

        cardDiv.append(img, id, title, price, description, category);

        mainDiv.append(cardDiv);
        
    });
  }