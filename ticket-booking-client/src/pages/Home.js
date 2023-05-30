import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../css/movies.css";
import Card from "../components/movies/Card";
import { ImTicket } from "react-icons/im";
import { movie } from "../assets/data/movieDb";
import { Link } from "react-router-dom";

import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";
import "../css/home.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CurrentMovieCard from "../components/movies/CurrentMovieCard";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=620bcff5c65556bbc5abc99f82b7164a&language=en-US&page=1&include_adult=false`
    )
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      });
  }, []);

  console.log(movies);

  return (
    <div className="movie-sec">
      <Navbar />
      <Carousel className="carousel">
        <div>
          <img src={c1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={c2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={c3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <div className="container pb-5">
        <div className="row">
          <h4 className="sec-title">Now Showing</h4>
        </div>
        <CurrentMovieCard />
        <hr />
        <div className="row">
          <h4 className="sec-title">Upcoming Movies</h4>
        </div>
        <div className="row up-movie-row">
          {movies.map(movie => <Card movie={movie} />)}
        </div>
      </div>
      <div className="grad"></div>
      {/* <div className="footer"></div> */}
    </div>
  );
}
