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
        <AiOutlineArrowRight size={30} style={{ marginRight: "30px" }} />
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
      name: "War & Politics",
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
              <FaStar color="gold" />
              <span className="rating">
                {Math.round(movie.vote_average * 10) / 10}{" "}
              </span>
            </div>
            <div className="Genres">
              {movie.genre_ids.slice(0, 1).map((genreId, index) => (
                <div key={index} className="GenresBox">
                  {genres.find((genre) => genreId === genre.id)?.name}
                </div>
              ))}
            </div>
            <div className="title">
              {movie.media_type === "movie" ? movie.title : movie.name}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
