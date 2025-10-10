
   const apifunc  = (param) =>{
    return API_BASE_URL = `https://api.tvmaze.com/search/shows?q=${param}`;
    
}


  const api_fetch = async () => {


    const datasearch = document.querySelector("#search-input").value;
    console.log('🚀 ~ index.js ~ datasearch:', datasearch);

    let value = apifunc(datasearch);

    try{

        let res = await fetch(value);
        let data = await res.json();
        Render_UI(data)
    } 
    catch(error) {

    }
  }

  const Render_UI = (infoData) => {
    console.log('🚀 ~ index.js ~ infoData:', infoData);
    const mainDiv = document.querySelector(".mainContainer");
    console.log(mainDiv);
    infoData.forEach((element) => {
        element = element.show;

        const card_div = document.createElement("div");
        const id = document.createElement("h4");
        const img = document.createElement("img");
        const name = document.createElement("h4");
        const language = document.createElement("h3");
        const genres = document.createElement("h3");
        const runTime = document.createElement("h3");
        const rating = document.createElement("h5");
        const summary = document.createElement("p");



        id.innerText = `id ${element.id}`;
        img.src = element.image.original; "https://via.placeholder.com/210x295";
        name.innerText = `name ${element.name}`;
        language.innerText = `language ${element.language}`;
        genres.innerText = `genres ${element.genres}`;
        runTime.innerText = `runTime ${element.runTime}`;
        rating.innerText = `rating ${element.rating.average}`;
       summary.innerHTML = `summary ${element.summary}`;


        // Summary with See More / See Less (HTML preserved)
    // =========================
    summary.className = "summary";
    const fullText = element.summary || "No summary available"; // original HTML included
    const shortText = fullText.slice(0, 100) + "...";
    summary.innerHTML = shortText; // use innerHTML to keep HTML formatting

    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = "See More";
    toggleBtn.className = "toggle-btn";

    toggleBtn.onclick = () => {
      if (toggleBtn.innerText === "See More") {
        summary.innerHTML = fullText; // full HTML summary
        toggleBtn.innerText = "See Less";
      } else {
        summary.innerHTML = shortText; // short HTML summary
        toggleBtn.innerText = "See More";
      }
    };



    //    class name

    card_div.className = "card_Div"

    card_div.append(img, id, name, language, genres, runTime, rating, summary, toggleBtn);

    mainDiv.append(card_div);
    });

  }

 const loginFunc=()=>{
    window.location="login.html";
    

}



let path =window.location.pathname;
console.log('🚀 ~ path:', path);
