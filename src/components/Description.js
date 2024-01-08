// Description.jsx

import React from "react";
import { useState, useEffect } from "react";
import "../styles/Description.css";
import { FaStar } from "react-icons/fa6";
import axios from "axios";
import { useParams } from "react-router-dom";

const Description = () => {
  let { id } = useParams();

  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setLoading(true);

        // Try fetching movie data
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNThmNTMxODUwZGM2ZmQ5NTFiMjE2NWI5YThiMjdjOSIsInN1YiI6IjY1OTI2OGRkZTY0MGQ2N2VlMGQ2MmQ5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GRch24-UOH4D-mx8hiIw9AN5p2oMDpJx8D3MP8jouYw",
            },
          }
        );

        if (!movieResponse.data) {
          // If movie data is empty, try fetching TV data
          const tvResponse = await axios.get(
            `https://api.themoviedb.org/3/tv/${id}`,
            {
              headers: {
                accept: "application/json",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNThmNTMxODUwZGM2ZmQ5NTFiMjE2NWI5YThiMjdjOSIsInN1YiI6IjY1OTI2OGRkZTY0MGQ2N2VlMGQ2MmQ5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GRch24-UOH4D-mx8hiIw9AN5p2oMDpJx8D3MP8jouYw",
              },
            }
          );

          setMovieData(tvResponse.data);
        } else {
          setMovieData(movieResponse.data);
        }

        setLoading(false);
      } catch (fetchError) {
        setError(fetchError);
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>; // You can replace this with your loading indicator
  }

  if (error) {
    return <p>Error: {error.message}</p>; // You can replace this with your error handling
  }

  return (
    <div className="description-container">
      <img
        src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
        className="poster"
        alt={movieData.title}
      />
      <div className="info-container">
        <div className="hea">
          <h1 className="movie-title">{movieData?.title}</h1>
          <div className="star-container">
            <span>
              <FaStar color="gold" size={23} />{" "}
            </span>
            <span className="vote-text">
              {Math.round(movieData.vote_average * 10) / 10}{" "}
            </span>
          </div>
        </div>
        <div className="genre-container">
          {movieData?.genres &&
            movieData.genres.map((genre, index) => (
              <div key={index} className="genre">
                {genre.name}
              </div>
            ))}
        </div>
        <p className="movie-description">{movieData.overview}</p>

        <div className="additional-info">
          <div className="info-label">Country:</div>
          <div className="info-value">
            {movieData.production_countries[0].name}
          </div>

          <div className="info-label">Date Release:</div>
          <div className="info-value">{movieData.release_date}</div>

          <div className="info-label">Production:</div>
          <div className="info-value">
            {movieData.production_companies.map((company, index) => (
              <span key={index}>{company.name}, </span>
            ))}
          </div>

          <div className="info-label">Homepage</div>
          <div className="info-value">
            <a href={movieData.homepage} style={{ color: "wheat" }}>
              {" "}
              {movieData.homepage}{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
