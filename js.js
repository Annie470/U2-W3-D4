//ARRAY
const arrayP = [];
//funzione per sostituire le img delle card (arrayP come parametro)
const changeImg = function (array) {
  //prendo le card img dell html e ne faccio un array
  const cardArray = document.querySelectorAll("#card-row img");
  let i = 0;
  // arrayP [i].imgUrl e cambio src delle img i++
  cardArray.forEach((el) => {
    el.removeAttribute("src");
    el.setAttribute("src", array[i].src.medium);
    i++;
  });
  //riparte il ciclo
};
//funzione getData(query es= hamster or tiger)
const endpoint = "https://api.pexels.com/v1/search?query=";

const getData = function (query) {
  fetch(endpoint + query, {
    headers: {
      Authorization: "kT54yxGJQw0pIHLnBAXnCZaqyhx31Hq8Cxhfq7O3TuoHaC254kgDdPn5",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Fetch avvenuta con successo");
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .then((data) => {
      arrayP.length = 0;
      arrayP.push(...data.photos);
      console.log(arrayP);
      changeImg(arrayP);
    })

    .catch((error) => {
      console.log(error);
    });
};

//bottone load e funzione chiamata
const btnLoad = document.getElementById("lIF");
btnLoad.addEventListener("click", () => {
  getData("hamster");
});
