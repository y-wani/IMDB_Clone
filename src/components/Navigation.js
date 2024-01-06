// Navigation.js

import React, { useState } from "react";
import "../styles/nav.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { TiVideoOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const Navigation = ({ scrollToSection }) => {
  const [selectedGenre, setSelectedGenre] = useState("Genre");
  const genres = ["All", "Action", "Comedy", "Drama", "Sci-Fi"];

  const onSubmit = () => {
    console.log("button clicked with genre:", selectedGenre);
    // Add your logic to handle the search with the selected genre
  };

  return (
    <nav className="nav-bar">
      <Link to="/">
        <TiVideoOutline color="yellow" size={50} className="logo" />
      </Link>
      <span className="nav-links">
        <span
          className="nav-link"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Now playing
        </span>

        <span className="nav-link" onClick={() => scrollToSection("series")}>
          Series
        </span>

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
        <span className="nav-link" onClick={() => scrollToSection("trend")}>
          Trending
        </span>
        <span className="nav-link" onClick={() => scrollToSection("discover")}>
          Discover
        </span>
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
