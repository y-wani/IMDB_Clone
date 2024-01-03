import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Carousel.css";
import { AiOutlineArrowRight } from "react-icons/ai";
const Carousel = ({ movies }) => {

    const NextArrow = ({ onClick }) => {
        return (
          <div className="next-slick-arrow" onClick={onClick}>
            <AiOutlineArrowRight size={30}/>
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

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    slidesToShow: 3,
    nextArrow: <NextArrow />, // Add custom next arrow
    prevArrow: <PrevArrow />,
  };



  return (
    <div>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="sliderr">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.original_title}
            />
            <div className="star">  
            <FaStar  color="gold"/>
            <span className="rating"> {movie.vote_average} </span>
            </div>
            <div className="title">{movie.original_title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
