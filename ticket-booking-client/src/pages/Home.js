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

export default function Movies() {
  const [movies, setMovies] = useState([]);
  // const [movie, setmovie] = useState();

  useEffect(() => {
    // fetch(
    //   `https://api.themoviedb.org/3/search/movie?api_key=620bcff5c65556bbc5abc99f82b7164a&language=en-US&page=1&include_adult=false&query=Avatar: The Way of Water`
    // )
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     if (!data.errors) {
    //       setmovie(data.results[0]);
    //     } else {
    //       setmovie([]);
    //     }
    //   });

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
        {movie &&
          <div
            className="row curr-movie"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w900${movie.backdrop_path})`
            }}
          >
            <div>
              <p className="movie-name">
                {movie.title}
              </p>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-6">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <img
                    src={movie.poster_path}
                    className="movie-poster"
                    width="200"
                  />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-8 col-details">
                  <div className="row">
                    <div className="col-6 details">
                      <p className="sub-title">Released</p>
                      <p className="sub-info">
                        {movie.release_date}
                      </p>
                    </div>
                    <div className="col-6 details">
                      <p className="sub-title">Language</p>
                      <p className="sub-info">
                        {movie.original_language}
                      </p>
                    </div>
                    <div className="col-6 details">
                      <p className="sub-title">Run Time</p>
                      <p className="sub-info">
                        {movie.runtime} min
                      </p>
                    </div>
                    <div className="col-6 details">
                      <p className="sub-title">Ratings</p>
                      <p className="sub-info">
                        {movie.rating}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-6">
              <p className="sub-title">Cast</p>
              <p className="info">
                {/* {movie.casts.map((cast) => (
                  <span>{cast}{' '}</span>
                ))} */}
                {movie.casts.map((cast, index) =>
                  <span>
                    {cast}
                    {index === movie.casts.length - 1 ? "" : ","}{" "}
                  </span>
                )}
              </p>
              <br />
              <p className="sub-title">Description</p>
              <p className="info">
                {movie.overview}
              </p>
              <br />
              <p className="sub-title">Director</p>
              <p className="info">
                {movie.director}
              </p>
            </div>
            <div className="row mt-4">
              <Link to="/tickets">
                <buton className="book-btn">
                  <ImTicket /> Book Ticket
                </buton>
              </Link>
            </div>
          </div>}

        <div className="row mt-5">
          <p className="sub-title m-3">Trailer</p>
          <iframe
            className="movie-trailer"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/d9MyW72ELq0?autoplay=1&mute=1"
            title="YouTube video player"
            frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
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
