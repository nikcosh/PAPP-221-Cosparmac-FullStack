import React from "react";

function MovieList({ movies, onSelect }) {
  const categories = [...new Set(movies.map((m) => m.category))];

  return (
    <div className="movie-list-wrapper">
      {categories.map((category) => (
        <div key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="movie-list">
            {movies
              .filter((movie) => movie.category === category)
              .map((movie) => (
                <div
                  key={movie.id}
                  className="movie-card"
                  onClick={() => onSelect(movie, "view")}
                >
                  <img
                    src={movie.imageUrl}
                    alt={movie.title}
                    className="movie-image"
                  />
                  <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>Rating: {movie.rating}</p>
                    <span className="movie-category">{movie.category}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
