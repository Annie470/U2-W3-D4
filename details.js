const parameters = new URLSearchParams(location.search);
const endpoint2 = `https://api.pexels.com/v1/photos/`;
const eventId = parameters.get(`eventId`);

console.log(location.search);
console.log(eventId);

//chiamata con id
fetch(endpoint2 + eventId, {
  headers: {
    Authorization: "kT54yxGJQw0pIHLnBAXnCZaqyhx31Hq8Cxhfq7O3TuoHaC254kgDdPn5",
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`errore`);
    }
  })
  .then((data) => {
    const img = document.querySelector("img");
    img.setAttribute("src", data.src.medium);
    const h5 = document.querySelector("h5");
    h5.innerText = data.photographer;
    const anch = document.getElementById("special-a");
    anch.setAttribute("href", data.photographer_url);
  })
  .catch((error) => {
    console.log(error);
  });
