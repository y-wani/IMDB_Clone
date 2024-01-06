import React from "react";
import { useState, useEffect } from "react";
import "../styles/Description.css";
import { FaStar } from "react-icons/fa6";
import axios from "axios";
import { useParams } from "react-router-dom";

const Description = () => {
  let { id } = useParams();
  console.log(id);

  const url =
    "https://image.tmdb.org/t/p/original/3eeCYGVWb4Ic8SFpARGWOjyl9Md.jpg";

  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Love",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV-Film",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
    {
      id: 10759,
      name: "Action",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 10762,
      name: "Kids",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10763,
      name: "News",
    },
    {
      id: 10764,
      name: "Reality",
    },
    {
      id: 10765,
      name: "Sci-Fi",
    },
    {
      id: 10766,
      name: "Soap",
    },
    {
      id: 10767,
      name: "Talk",
    },
    {
      id: 10768,
      name: "Politics",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNThmNTMxODUwZGM2ZmQ5NTFiMjE2NWI5YThiMjdjOSIsInN1YiI6IjY1OTI2OGRkZTY0MGQ2N2VlMGQ2MmQ5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GRch24-UOH4D-mx8hiIw9AN5p2oMDpJx8D3MP8jouYw",
            },
          }
        );
        setMovieData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
      window.scrollTo(0, 0);
    };

    fetchMovieData();
    console.log(movieData);
    // Cleanup function to reset state when component is unmounted
    return () => {
      setMovieData(null);
      setError(null);
      setLoading(true);
    };
  }, [id]);

  if (loading) {
    return <p>Loading...</p>; // You can replace this with your loading indicator
  }

  if (error) {
    return <p>Error: {error.message}</p>; // You can replace this with your error handling
  }

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
      {console.log(movieData)}
      <img
        src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
        className="poster"
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
        <p className="movie-description">{description}</p>

        {/* Additional information */}
        <div className="additional-info">
          <div className="info-label">Country:</div>
          <div className="info-value">
            {movieData.production_countries[0].name}
          </div>

          <div className="info-label">Date Release:</div>
          <div className="info-value">{movieData.release_date}</div>

          <div className="info-label">Production:</div>
          <div className="info-value">
            {movieData.production_companies.map((company) => (
              <span>{company.name}, </span>
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
