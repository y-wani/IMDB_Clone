import React, { useState, useEffect } from "react";
import "../styles/landing.css";
import { FaCalendarAlt } from "react-icons/fa";
import { BsStopwatchFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../images/background12.png";
import axios from "axios";
import { AiOutlineArrowRight } from "react-icons/ai";

const Landing = () => {
  const baseURL =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const APIkey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNThmNTMxODUwZGM2ZmQ5NTFiMjE2NWI5YThiMjdjOSIsInN1YiI6IjY1OTI2OGRkZTY0MGQ2N2VlMGQ2MmQ5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GRch24-UOH4D-mx8hiIw9AN5p2oMDpJx8D3MP8jouYw";

  const [movies, setMovies] = useState([]);

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
      .then((response) => setMovies(response.data.results.slice(0, 5)))
      .catch((err) => console.error(err));
  }, []);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="next-slick-arrow" onClick={onClick}>
        <AiOutlineArrowRight size={30} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="prev-slick-arrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          stroke="black"
          height="40"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
        </svg>
      </div>
    );
  };

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

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    slidesToShow: 1,
    nextArrow: <NextArrow />, // Add custom next arrow
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {movies.map((movie) => (
        <div key={movie.id} className="slide">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.original_title}
            style={{
              marginTop: "5%",
              height: "100vh",
              width: "100vw", // This will maintain the aspect ratio
              objectFit: "cover",
              objectPosition: "50% 50%",
            }}
          />
          <div className="content">
            <div className="MovieName">{movie.original_title}</div>
            <div className="Genres">
              {movie.genre_ids.map((genreId, index) => (
                <div key={index} className="GenreBox">
                  {genres.find((genre) => genreId === genre.id)?.name}
                </div>
              ))}
            </div>
            <div className="details">
              <FaCalendarAlt color="white" />
              <div className="text">{movie.release_date}</div>

              <FaStar color="yellow" style={{ marginLeft: 20, marginTop: 1 }} />
              <div className="text">{movie.vote_average}</div>
              <p className="overview">{movie.overview}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Landing;
