import React, { useState } from "react";
import moviesData from "./data";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Create
  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: Date.now() }]);
  };

  // Update
  const updateMovie = (updatedMovie) => {
    setMovies(
      movies.map((m) => (m.id === updatedMovie.id ? updatedMovie : m))
    );
    setSelectedMovie(null);
  };

  // Delete
  const deleteMovie = (id) => {
    setMovies(movies.filter((m) => m.id !== id));
    setSelectedMovie(null);
  };

  return (
    <div className="app">
      <h1>Movie Reviews App</h1>
      {selectedMovie ? (
        <MovieDetails
          movie={selectedMovie}
          onBack={() => setSelectedMovie(null)}
          onDelete={deleteMovie}
          onUpdate={updateMovie}
        />
      ) : (
        <MovieList movies={movies} onSelect={setSelectedMovie} onAdd={addMovie} />
      )}
    </div>
  );
}

export default App;
