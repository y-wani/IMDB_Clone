// MovieSlider.js
import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/landing.css";
import { FaCalendarAlt } from "react-icons/fa";
import { BsStopwatchFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";


const MovieSlider = ({ movies }) => {
  const genres = ["Action", "Adventure", "Sci-fi"];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {movies.map((movie) => (
        <div
        key={movie.id}
        className="slide"
        style={{
          background: `url(https://image.tmdb.org/t/p/original${movie.poster_path}) no-repeat center center fixed`,
          backgroundSize: "contain",
          height: "100vh",
          width: "100vw",
        }}
      >
          <div className="MovieName">{movie.original_title}</div>
          <div className="Genres">
            {genres.map((genre, index) => (
              <div key={index} className="GenreBox">
                {genre}
              </div>
            ))}
          </div>
          <div className="details">
            <FaCalendarAlt color="white" />
            <div className="text">{movie.release_date}</div>
            <BsStopwatchFill color="white" style={{ marginLeft: 20, marginTop: 1 }} />
            <div className="text">3:12:00</div>
            <FaStar color="yellow" style={{ marginLeft: 20, marginTop: 1 }} />
            <div className="text">{movie.vote_average}</div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default MovieSlider;
