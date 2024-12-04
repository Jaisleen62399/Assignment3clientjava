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
// Fetch artist information from MusicBrainz API
async function fetchArtistData(artistName) {
  // URL of the MusicBrainz API to search for artist
  const apiUrl = `https://musicbrainz.org/ws/2/artist/?query=artist:${artistName}&fmt=json`;

  try {
    // Fetching data from the MusicBrainz API
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Artist not found"); // Error handling if the response is not OK
    const data = await response.json();
    if (data.artists && data.artists.length > 0) {
      const artist = data.artists[0]; // Assuming the first result is the correct one
      fetchAlbumsAndLifeSpan(artist.id); // Fetch albums and life span with artist ID
    } else {
      musicResult.innerHTML = "<p>No artist found. Please try another name.</p>";
    }
  } catch (error) {
    // Handling errors and displaying them to the user
    musicResult.innerHTML = `<p style="color: red;">${error.message}</p>`;
  }
}

