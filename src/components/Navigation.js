import React, { useState, useEffect } from "react";
import "../styles/nav.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { TiVideoOutline } from "react-icons/ti";

const Navigation = () => {
  const [selectedGenre, setSelectedGenre] = useState("Genre"); // Default selected genre
  const genres = ["All", "Action", "Comedy", "Drama", "Sci-Fi"]; // Example genres

  const onSubmit = () => {
    console.log("button clicked with genre:", selectedGenre);
    // Add your logic to handle the search with the selected genre
  };

  return (
    <nav className="nav-bar">
      <TiVideoOutline color="yellow" size={50} className="logo" />
      <span className="nav-links">
        <span className="nav-link">Movies</span>
        <span className="nav-link">Series</span>

        <div className="dropdown-container">
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="genre-dropdown"
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <span className="nav-link">Trending</span>
      </span>
      <div className="search-container">
        <input
          type="text"
          className="Search-bar"
          placeholder="Search movies..."
        />
        <div onClick={onSubmit}>
          <HiMagnifyingGlass className="search-icon" size={25} color="white" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
