import React, { useState } from "react";

function MovieList({ movies, onSelect, onAdd }) {
  const [newMovie, setNewMovie] = useState({ title: "", description: "", rating: "", category: "" });

  const handleAdd = () => {
    if (!newMovie.title) return;
    onAdd(newMovie);
    setNewMovie({ title: "", description: "", rating: "", category: "" });
  };

  // grupam filme pe categorii
  const categories = [...new Set(movies.map((m) => m.category))];

  return (
    <div className="container">
      <h2>Movie List</h2>

      {categories.map((cat) => (
        <div key={cat} className="category-section">
          <h3>{cat}</h3>
          <div className="movie-list">
            {movies.filter((m) => m.category === cat).map((movie) => (
              <div key={movie.id} className="movie-card" onClick={() => onSelect(movie)}>
                <h4>{movie.title}</h4>
                <span>Rating: {movie.rating}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Add Movie Form */}
      <div className="add-movie-form">
        <h3>Add New Movie</h3>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={newMovie.category}
          onChange={(e) => setNewMovie({ ...newMovie, category: e.target.value })}
        />
        <button onClick={handleAdd}>Add Movie</button>
      </div>
    </div>
  );
}

export default MovieList;
