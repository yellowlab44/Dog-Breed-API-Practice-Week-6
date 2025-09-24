document.getElementById("loadDog").addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      // set the image from the API response
      document.getElementById("dogImg").src = data.message;
    })
    .catch(error => console.error("Error fetching dog:", error));
});