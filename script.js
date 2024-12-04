// Selecting the HTML elements
const searchButton = document.getElementById("searchButton");
const artistInput = document.getElementById("artistInput");
const musicResult = document.getElementById("musicResult");

// Event listener for search button
searchButton.addEventListener("click", () => {
  const artist = artistInput.value.trim(); // Get the artist name from the input
  if (artist) {
    fetchArtistData(artist); // Fetch data if the input is not empty
  } else {
    musicResult.innerHTML = "<p style='color: red;'>Please enter an artist name</p>"; // Error message for empty input
  }
});

