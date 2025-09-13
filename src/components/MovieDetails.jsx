import React, { useState } from "react";

function MovieDetails({ movie, onBack, onDelete, onUpdate }) {
  const [editMovie, setEditMovie] = useState(movie);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = () => {
    onUpdate(editMovie);
    setIsEditing(false);
  };

  return (
    <div className="movie-details">
      <button onClick={onBack}>← Back</button>

      {isEditing ? (
        <div>
          <input value={editMovie.title} onChange={(e) => setEditMovie({ ...editMovie, title: e.target.value })} />
          <input value={editMovie.description} onChange={(e) => setEditMovie({ ...editMovie, description: e.target.value })} />
          <input type="number" value={editMovie.rating} onChange={(e) => setEditMovie({ ...editMovie, rating: e.target.value })} />
          <input value={editMovie.category} onChange={(e) => setEditMovie({ ...editMovie, category: e.target.value })} />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <p><strong>Rating:</strong> {movie.rating}</p>
          <p><strong>Category:</strong> {movie.category}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(movie.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
