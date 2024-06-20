// script.js
document.addEventListener("DOMContentLoaded", () => {
    const movieDetails = document.querySelector(".movie-details");

    const movie = {
        director: "Susanne Bier",
        starring: "Sandra Bullock, John Malkovich, Sarah Paulson",
        runtime: "124 minutes",
    };

    // Populate movie details
    const directorElement = document.createElement("p");
    directorElement.innerHTML = `<strong>Director:</strong> ${movie.director}`;
    movieDetails.appendChild(directorElement);

    const starringElement = document.createElement("p");
    starringElement.innerHTML = `<strong>Starring:</strong> ${movie.starring}`;
    movieDetails.appendChild(starringElement);

    const runtimeElement = document.createElement("p");
    runtimeElement.innerHTML = `<strong>Runtime:</strong> ${movie.runtime}`;
    movieDetails.appendChild(runtimeElement);
});


