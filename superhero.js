// superhero.js

// Get the parameters from the URL to retrieve the superhero details
const urlParams = new URLSearchParams(window.location.search);
const superheroName = urlParams.get("name");
const superheroImageURL = urlParams.get("imageURL");

// Function to display superhero details on the superhero.html page
function displaySuperheroDetails() {
  const superheroImage = document.getElementById("superheroImage");
  superheroImage.setAttribute("src", superheroImageURL);

  const superheroNameElement = document.getElementById("superheroName");
  superheroNameElement.textContent = superheroName;

  // You can add more superhero details here, like description, abilities, etc.
  const superheroDescription = document.getElementById("superheroDescription");
  superheroDescription.textContent = "Some description about the superhero goes here.";

  // Add click event for "Add to Favorite" button
  const addToFavoriteBtn = document.getElementById("addToFavoriteBtn");
  addToFavoriteBtn.addEventListener("click", () => {
    addToFavorites(superheroName, superheroImageURL);
    addToFavoriteBtn.textContent = "Added to Favorites";
    addToFavoriteBtn.disabled = true;
  });
}

// Call the function to display superhero details
displaySuperheroDetails();
