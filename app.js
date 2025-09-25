// Version using async/await to get a list of dog breeds and display a random image of the selected breed
// 1. Get references to HTML elements
const breedSelect = document.getElementById("breedSelect");
const getDogButton = document.getElementById("getDog");
const dogImg = document.getElementById("dogImg");

// 2. Load all breeds into the dropdown
async function loadBreeds() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all"); 
        // fetch from the API endpoint that lists all breeds
    const data = await response.json();
        // await response.json() parses the body as JSON (also asynchronous), giving you a JS object data
    const breeds = Object.keys(data.message);
        // Object.keys(data.message) extracts an array of those breed names (e.g., ["bulldog", "pug", ...]).
    breeds.forEach(breed => {
        // same as: breeds.forEach(function(breed) { code here };
      const option = document.createElement("option");
        // create a new <option> element for each breed
      option.value = breed;
        // Set its value to the breed name
      option.textContent = breed;
        // Set its visible text (textContent) to the breed name.
      breedSelect.appendChild(option);
        // Append the <option> to the <select> dropdown so it appears in the list
    });
  } 
  // Catch and log any errors
  catch (error) {
    console.error("Error loading breeds:", error);
  }
}

// 3. Create an async function to fetch a random dog image for the selected breed
async function loadDogImage() {
  try {
    const selectedBreed = breedSelect.value;
    // Get the currently selected breed from the dropdown
    const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`);
    const data = await response.json();

    dogImg.src = data.message;
  } catch (error) {
    console.error("Error fetching dog image:", error);
  }
}

// Event listener for button click
getDogButton.addEventListener("click", loadDogImage);

// Call loadBreeds when the page loads
loadBreeds();







// Version using fetch and .then() to get a list of dog breeds and display a random image of the selected breed
// Get references to HTML elements
//const breedSelect = document.getElementById("breedSelect");
//const getDogButton = document.getElementById("getDog");
//const dogImg = document.getElementById("dogImg");

// 1. Load all breeds into the dropdown
//fetch("https://dog.ceo/api/breeds/list/all")
//  .then(response => response.json())
//  .then(data => {
//    const breeds = Object.keys(data.message); // breed names
//    breeds.forEach(breed => {
//      const option = document.createElement("option");
//      option.value = breed;
//      option.textContent = breed;
//      breedSelect.appendChild(option);
//    });
//  })
//  .catch(error => console.error("Error loading breeds:", error));

// 2. Fetch random dog image for selected breed
//getDogButton.addEventListener("click", () => {
//  const selectedBreed = breedSelect.value;
//  fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
//    .then(response => response.json())
//    .then(data => {
//      dogImg.src = data.message;
//    })
//    .catch(error => console.error("Error fetching dog image:", error));
//});








// Simple version that fetches a random dog image on button click:

//document.getElementById("loadDog").addEventListener("click", () => {
  // create an event listener for the button
  // create a fetch request to the Dog CEO API
   // fetch("https://dog.ceo/api/breeds/image/random")
    //.then(response => response.json())
    //.then(data => {
      // set the image from the API response
     // document.getElementById("dogImg").src = data.message;
    //})
    //.catch(error => console.error("Error fetching dog:", error));
//});