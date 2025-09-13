import React, { useState, useEffect } from "react";

function MovieModal({ movie, onClose, onSave, onDelete, mode }) {
  const [isEditing, setIsEditing] = useState(mode === "edit" || mode === "add");
  const [title, setTitle] = useState(movie?.title || "");
  const [description, setDescription] = useState(movie?.description || "");
  const [rating, setRating] = useState(movie?.rating || "");
  const [category, setCategory] = useState(movie?.category || "");
  const [imageUrl, setImageUrl] = useState(movie?.imageUrl || "");

  useEffect(() => {
    setIsEditing(mode === "edit" || mode === "add");
    setTitle(movie?.title || "");
    setDescription(movie?.description || "");
    setRating(movie?.rating || "");
    setCategory(movie?.category || "");
    setImageUrl(movie?.imageUrl || "");
  }, [movie, mode]);

  const handleSave = () => {
    if (!title || !description || !rating || !category || !imageUrl) {
      alert("All fields are required!");
      return;
    }
    onSave({ ...(movie || {}), title, description, rating, category, imageUrl });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {!isEditing ? (
          <>
            <img src={imageUrl} alt={title} className="modal-image" />
            <h2>{title}</h2>
            <p>Rating: {rating}</p>
            <p>{description}</p>
            <p>Category: {category}</p>
            <div className="modal-buttons">
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button
                onClick={() => {
                  if (window.confirm("Are you sure you want to delete this movie?")) onDelete(movie.id);
                }}
              >
                Delete
              </button>
              <button onClick={onClose}>Close</button>
            </div>
          </>
        ) : (
          <>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating" />
            <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
            <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
            <div className="modal-buttons">
              <button onClick={handleSave}>Save</button>
              <button onClick={onClose}>Cancel</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MovieModal;
