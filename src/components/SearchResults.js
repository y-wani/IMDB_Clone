// SearchResults.js

import React from "react";
import "../styles/Search.css";
import { FaStar } from "react-icons/fa6";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchResults = ({ searchValue }) => {
  const [movie, setMovie] = useState([]);
  const baseURL = `https://api.themoviedb.org/3/search/multi?query=${searchValue}&include_adult=false&language=en-US&page=1`;

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNThmNTMxODUwZGM2ZmQ5NTFiMjE2NWI5YThiMjdjOSIsInN1YiI6IjY1OTI2OGRkZTY0MGQ2N2VlMGQ2MmQ5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GRch24-UOH4D-mx8hiIw9AN5p2oMDpJx8D3MP8jouYw",
      },
    };

    axios
      .get(baseURL, options)
      .then((response) => setMovie(response.data.results))
      .catch((err) => console.error(err));
  }, [searchValue]);

  const url =
    "https://image.tmdb.org/t/p/original/3eeCYGVWb4Ic8SFpARGWOjyl9Md.jpg";

  const description =
    "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire";

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

  if (movie != null) {
    console.log(movie);
  }

  return (
    <div className="main-container">
      {movie.map((item) => (
        <div className="result-container">
          <img
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            alt={item.title || item.name}
            className="poster"
          />
          <div className="details-container">
            <div className="title-rating-box">
              <Link to={`/description/${item.id}`}>
                <div className="title">{item.title || item.name}</div>
              </Link>
              <div>
                <FaStar
                  color="rgb(233, 189, 80)"
                  style={{
                    marginLeft: "8px",
                    verticalAlign: "middle",
                    marginTop: "5px",
                  }}
                />
              </div>
              <div className="vote-text-search">
                {Math.round(item.vote_average * 10) / 10}
              </div>
            </div>
            <div className="genre-container-search">
              {item.genre_ids &&
                item.genre_ids.map((genreId, index) => (
                  <div key={index} className="genre-search">
                    {genres.find((genre) => genreId === genre.id)?.name}
                  </div>
                ))}
            </div>
            <div className="description">{item.overview}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
