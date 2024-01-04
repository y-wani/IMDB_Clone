import React, { useState, useEffect } from "react";
import "../styles/Recomm.css";
import axios from "axios";
import Carousel from "./Carousel";
import { AiOutlineArrowRight } from "react-icons/ai";

const Discover = () => {
  const [trending, setTrending] = useState([]);

  const baseURL1 =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  const baseURL2 =
    "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNThmNTMxODUwZGM2ZmQ5NTFiMjE2NWI5YThiMjdjOSIsInN1YiI6IjY1OTI2OGRkZTY0MGQ2N2VlMGQ2MmQ5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GRch24-UOH4D-mx8hiIw9AN5p2oMDpJx8D3MP8jouYw",
      },
    };

    // Make both requests concurrently
    const request1 = axios.get(baseURL1, options);
    const request2 = axios.get(baseURL2, options);

    // Combine the results when both requests are fulfilled
    Promise.all([request1, request2])
      .then(([response1, response2]) => {
        // Combine the results from both responses
        const combinedResults = [...response1.data.results, ...response2.data.results];
        setTrending(combinedResults);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">

      <div className="viewall">
        <div className="Headers">Discover</div>
        <div className="viewalltext"> View all</div>
        <AiOutlineArrowRight color="#7f7f7f" className="arrow" style={{marginLeft: "-5px"}}/>
      </div>
      
      <div className="carousel">
        <Carousel movies={trending} />
      </div>
    </div>
  );
};

export default Discover;
