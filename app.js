document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.querySelector(".beer-button");
  const randomBeer = document.querySelector(".random-beer");
  const descriptionDisplay = document.querySelector(".description");
  const resim = document.querySelector(".resim");

  function getData(e) {
    e.preventDefault();

    fetch("https://api.punkapi.com/v2/beers/random")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("beers :", data);
        const name = data[0].name;
        const description = data[0].description;
        const { volume } = data[0];
        const image_url = data[0].image_url;
        const volumeValue = volume.value;
        const volumeUnite = volume.unit;

        randomBeer.innerHTML = name + " " + volumeValue + volumeUnite;
        descriptionDisplay.innerHTML = description;
        resim.innerHTML = `<img src="${image_url}"  id="pp" alt="">`;
      })
      .catch(err => {
        console.log(err);
      });
  }

  startBtn.addEventListener("click", getData);
});
