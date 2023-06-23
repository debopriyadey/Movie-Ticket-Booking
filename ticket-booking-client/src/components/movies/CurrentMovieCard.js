import React, { useContext, useEffect, useState } from "react";
import { getCurrentMovie } from "../../api/movieApi";
import { Link } from "react-router-dom";
import { ImTicket } from "react-icons/im";
import { MovieContext } from "../../context";

export default function CurrentMovieCard({ movie }) {
  const [currMovie, setCurrMovie] = useState();

  const { movieId, setMovieId } = useContext(MovieContext)

  useEffect(() => {
    getCurrentMovie().then(res => {
      setCurrMovie(res);
      setMovieId(res.id)
      sessionStorage.setItem("movieId", res.id);
    });
  }, []);

  return (
    <div>
      {currMovie &&
        <div>
          <div className="row curr-movie">
            <div>
              <p className="movie-name">
                {currMovie.title}
              </p>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-6">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <img
                    src={currMovie.poster}
                    className="movie-poster"
                    width="200"
                  />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-8 col-details">
                  <br />
                  <div className="row">
                    <div className="col-6 details">
                      <p className="sub-title">Released</p>
                      <p className="sub-info">
                        {currMovie.releaseDate}
                      </p>
                    </div>
                    <div className="col-6 details">
                      <p className="sub-title">Language</p>
                      <p className="sub-info">
                        {currMovie.language}
                      </p>
                    </div>
                    <div className="col-6 details">
                      <p className="sub-title">Run Time</p>
                      <p className="sub-info">
                        {currMovie.runtime} min
                      </p>
                    </div>
                    <div className="col-6 details">
                      <p className="sub-title">Ratings</p>
                      <p className="sub-info">
                        {currMovie.rating}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-6">
              {/*  */}
              <br />
              <p className="sub-title">Description</p>
              <p className="info">
                {currMovie.description}
              </p>
              <br />
              <p className="sub-title">Director</p>
              <p className="info">
                {currMovie.director}
              </p>
            </div>
            <div className="row mt-4">
              <Link to="/tickets">
                <buton className="book-btn">
                  <ImTicket /> Book Ticket
                </buton>
              </Link>
            </div>
          </div>
          <div className="row mt-5">
            <p className="sub-title m-3">Trailer</p>
            <iframe
              width="560"
              height="315"
              src={currMovie.trailer}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
        </div>}
    </div>
  );
}
