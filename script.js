
let movieCollection = [
]

// Function to display all movies
function displayMovies() {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = ''; // Clear the current list

    movieCollection.forEach((movie, index) => {
        movieList.innerHTML += `
            <div id="movie-${index}">
                <strong>Title:</strong> ${movie.title}, 
                <strong>Director:</strong> ${movie.director}, 
                <strong>Year:</strong> ${movie.yearReleased} 
                <button onclick="editMovie(${index})">Edit</button>
                <button onclick="deleteMovie(${index})">Delete</button>
            </div>
            <br>
        `;
    });
}

// Function to add a movie to the collection
function addMovie() {
    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const yearReleased = parseInt(document.getElementById('year').value);

    if (title && director && yearReleased) {
        movieCollection.push({ title, director, yearReleased });
        displayMovies();
        console.log(`${title} has been added.`);
    } else {
        alert('Please fill out all fields.');
    }
}

// Function to delete a movie by index
function deleteMovie(index) {
    const removed = movieCollection.splice(index, 1);
    displayMovies();
    console.log(`${removed[0].title} has been deleted.`);
}

// Function to edit a movie
function editMovie(index) {
    const newTitle = prompt("Enter new title:", movieCollection[index].title);
    const newDirector = prompt("Enter new director:", movieCollection[index].director);
    const newYearReleased = prompt("Enter new year released:", movieCollection[index].yearReleased);

    if (newTitle && newDirector && newYearReleased) {
        movieCollection[index] = {
            title: newTitle,
            director: newDirector,
            yearReleased: parseInt(newYearReleased)
        };
        displayMovies();
        console.log(`Movie updated to ${newTitle}, directed by ${newDirector}, released in ${newYearReleased}.`);
    } else {
        alert('All fields must be filled to edit.');
    }
}


displayMovies();
