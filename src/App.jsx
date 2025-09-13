import React, { useState } from "react";
import movies from "./data";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div style={{padding:"20px", fontFamily:"Arial"}}>
      <h1>Movie Reviews App</h1>
      {selectedMovie ? (
        <MovieDetails 
          movie={selectedMovie} 
          onBack={() => setSelectedMovie(null)} 
        />
      ) : (
        <MovieList movies={movies} onSelect={setSelectedMovie} />
      )}
    </div>
  );
}

export default App;
