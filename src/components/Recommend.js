import React, { useState, useEffect } from "react";
import "../styles/Recomm.css";
import axios from "axios";
import Carousel from "./Carousel";
import { AiOutlineArrowRight } from "react-icons/ai";

const Recommend = () => {
  const [trending, setTrending] = useState([]);
  const baseURL =
    "https://api.themoviedb.org/3/trending/all/day?language=en-US";

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
      .then((response) => setTrending(response.data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <div className="viewall">
        <div className="Headers">Trending</div>
        <div className="viewalltext"> View all</div>
        <AiOutlineArrowRight color="#7f7f7f" className="arrow"/>
      </div>
      
      <div className="carousel">
        <Carousel movies={trending} />
      </div>
    </div>
  );
};

export default Recommend;
