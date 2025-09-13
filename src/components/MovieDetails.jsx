import React from "react";

function MovieDetails({ movie, onBack }) {
  return (
    <div className="movie-details">
      <button onClick={onBack}>← Back</button>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
    </div>
  );
}

export default MovieDetails;
