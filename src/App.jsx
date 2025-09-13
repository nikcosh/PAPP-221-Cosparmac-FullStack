import React, { useState } from "react";
import moviesData from "./data";
import MovieList from "./components/MovieList";
import MovieModal from "./components/MovieModal";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [modalMovie, setModalMovie] = useState(null);
  const [modalMode, setModalMode] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: Date.now() }]);
  };

  const updateMovie = (movie) => {
    setMovies(movies.map((m) => (m.id === movie.id ? movie : m)));
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((m) => m.id !== id));
    setModalMovie(null);
    setModalMode(null);
  };

  const openModal = (movie = null, mode = "view") => {
    setModalMovie(movie);
    setModalMode(mode);
  };

  const closeModal = () => {
    setModalMovie(null);
    setModalMode(null);
  };

  const handleSave = (movie) => {
    if (modalMode === "add") addMovie(movie);
    else updateMovie(movie);
    closeModal();
  };

  const filteredMovies = movies.filter((m) =>
    m.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="nav-title">Movie Reviews</h1>
        <div className="nav-actions">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => openModal(null, "add")}>Add Movie</button>
        </div>
      </nav>

      {/* Movie List */}
      <MovieList movies={filteredMovies} onSelect={openModal} />

      {/* Modal */}
      {modalMode && (
        <MovieModal
          movie={modalMovie}
          onClose={closeModal}
          onSave={handleSave}
          onDelete={deleteMovie}
          mode={modalMode}
        />
      )}
    </div>
  );
}

export default App;
