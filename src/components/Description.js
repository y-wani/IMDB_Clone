import React from "react";
import "../styles/Description.css";
import { FaStar } from "react-icons/fa6";

const Description = (movie) => {
  const url =
    "https://image.tmdb.org/t/p/original/3eeCYGVWb4Ic8SFpARGWOjyl9Md.jpg"; // Replace with the actual image URL

  const genres = ["Drama", "Action", "Fiction"];

  const description =
    "In a ruined and toxic future, a community exists in a giant underground silo that plunges hundreds of stories deep. There, men and women live in a society full of regulations they believe are meant to protect them.";

  // Additional data
  const country = "United States";
  const releaseDate = "May 05, 2023";
  const production = "AMC Studios";
  const cast = [
    "Rashida Jones",
    "David Oyewolo",
    "Tim Robbins",
    "Rebecca Ferguson",
    "Avi Nash",
  ];

  return (
    <div className="description-container">
      <img src={url} alt="Movie Poster" className="poster" />
      <div className="info-container">
        <div className="hea"> 
        <h1 className="movie-title">Silo</h1>
        <div className="star-container" > 
        <span> <FaStar color="gold" size={23}/> </span>
        <span className="vote-text"> 6.83 </span>
        </div>
        </div>
        <div className="genre-container">
          {genres.map((genre, index) => (
            <div key={index} className="genre">
              {genre}
            </div>
          ))}
        </div>
        <p className="movie-description">{description}</p>

        {/* Additional information */}
        <div className="additional-info">
          <div className="info-label">Country:</div>
          <div className="info-value">{country}</div>

          <div className="info-label">Genre:</div>
          <div className="info-value">Drama, Science Fiction</div>

          <div className="info-label">Date Release:</div>
          <div className="info-value">{releaseDate}</div>

          <div className="info-label">Production:</div>
          <div className="info-value">{production}</div>

          <div className="info-label">Cast:</div>
          <div className="info-value">
            {cast.map((actor, index) => (
              <span key={index}>{actor}, </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
