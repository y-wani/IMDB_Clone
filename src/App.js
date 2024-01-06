// App.js

import React, { useRef } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import Recommend from "./components/Recommend";
import Series from "./components/Series";
import Discover from "./components/Discover";
import Description from "./components/Description";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const landingRef = useRef(null);
  const trendRef = useRef(null);
  const seriesRef = useRef(null);
  const discoverRef = useRef(null);

  const scrollToSection = (section) => {
    const ref =
      section === "landing"
        ? landingRef
        : section === "trend"
        ? trendRef
        : section === "series"
        ? seriesRef
        : discoverRef;

    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <Router>
      <div className="App">
        <Navigation scrollToSection={scrollToSection} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/description/:id" element={<Description />} />
        </Routes>
        
        <div ref={trendRef}>
          <Recommend />
        </div>
        <div ref={seriesRef}>
          <Series />
        </div>
        <div ref={discoverRef}>
          <Discover />
        </div>
      </div>
    </Router>
  );
}

export default App;
