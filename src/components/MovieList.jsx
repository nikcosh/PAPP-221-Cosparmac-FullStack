import React from "react";

function MovieList({ movies, onSelect }) {
  return (
    <div className="container">
      <h2>Movie List</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div 
            key={movie.id} 
            className="movie-card"
            onClick={() => onSelect(movie)}
          >
            <h3>{movie.title}</h3>
            <span>Rating: {movie.rating}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
