import React, { useEffect, useState } from "react";
import "../css/form.css";
import Navbar from "../components/Navbar";
import { getCurrentMovie, insertMovie } from "../api/movieApi";

export default function MovieForm() {
  const [movie, setMovie] = useState({
    title: "",
    bgImg: "",
    poster: "",
    releaseDate: "",
    language: "",
    runtime: "",
    rating: "",
    director: "",
    description: "",
    trailer: "",
    screening: false,
    price: 180
  });

  const handleAddMovie = () => {
    insertMovie(movie).then(res => {
      alert("Successfully added new movie");
    });
  };

  useEffect(() => {
    getCurrentMovie((res) => {
      setMovie(res)
    })
  },[])

  return (
    <div
      className="movie-form-sec"
      style={{ backgroundImage: `url("${movie.bgImg}")` }}
    >
      <Navbar />
      <div className="container mt-5 py-5">
        <div className="row movie-form-cont">
          {/* <form className=""> */}
          <div className="col-sm-12 col-md-6">
            <div className="form-group row">
              <label className="col-form-label">Title</label>
              <br />
              <div className="">
                <input
                  type="text"
                  readonly
                  className="form-control"
                  id="title"
                  onChange={e => setMovie({ ...movie, title: e.target.value })}
                  value={movie.title}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form-group row">
              <label className="col-form-label">Director</label>
              <br />
              <div className="">
                <input
                  type="text"
                  readonly
                  className="form-control"
                  id="director"
                  onChange={e =>
                    setMovie({ ...movie, director: e.target.value })}
                  value={movie.director}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12">
            <div className="form-group row">
              <label for="inputPassword" className="col-form-label">
                Background Image
              </label>
              <br />
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  id="bgImg"
                  onChange={e => setMovie({ ...movie, bgImg: e.target.value })}
                  value={movie.bgImg}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12">
            <div className="form-group row">
              <label className="col-form-label">Poster</label>
              <br />
              <div className="">
                <input
                  type="text"
                  readonly
                  className="form-control"
                  id="poster"
                  onChange={e => setMovie({ ...movie, poster: e.target.value })}
                  value={movie.poster}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12">
            <div className="form-group row">
              <label className="col-form-label">Trailer</label>
              <br />
              <div className="">
                <input
                  type="text"
                  readonly
                  className="form-control"
                  id="trailer"
                  onChange={e => setMovie({ ...movie, trailer: e.target.value })}
                  value={movie.trailer}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="form-group row">
              <label className="col-form-label">Release Date</label>
              <br />
              <div className="">
                <input
                  type="text"
                  readonly
                  className="form-control"
                  id="releaseDate"
                  onChange={e =>
                    setMovie({ ...movie, releaseDate: e.target.value })}
                  value={movie.releaseDate}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="form-group row">
              <label className="col-form-label">Language</label>
              <br />
              <div className="">
                <input
                  type="text"
                  readonly
                  className="form-control"
                  id="language"
                  onChange={e =>
                    setMovie({ ...movie, language: e.target.value })}
                  value={movie.language}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="form-group row">
              <label className="col-form-label">Runtime</label>
              <br />
              <div className="">
                <input
                  type="text"
                  readonly
                  className="form-control"
                  id="runtime"
                  onChange={e =>
                    setMovie({ ...movie, runtime: e.target.value })}
                  value={movie.runtime}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="form-group row">
              <label className="col-form-label">Rating</label>
              <br />
              <div className="">
                <input
                  type="text"
                  readonly
                  className="form-control"
                  id="rating"
                  onChange={e => setMovie({ ...movie, rating: e.target.value })}
                  value={movie.rating}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-12">
            <div className="form-group row">
              <label className="col-form-label">Description</label>
              <br />
              <div className="">
                <textarea
                  rows={4}
                  type="text"
                  readonly
                  className="form-control"
                  id="description"
                  onChange={e =>
                    setMovie({ ...movie, description: e.target.value })}
                  value={movie.description}
                />{" "}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="form-group row">
              <label className="col-form-label">Ticket Price</label>
              <br />
              <div className="">
                <input
                  type="text"
                  readonly
                  className="form-control"
                  id="price"
                  onChange={e => setMovie({ ...movie, price: e.target.value })}
                  value={movie.price}
                />
              </div>
            </div>
            {/* </form> */}
          </div>
          <button className="btn btn-primary w-100" onClick={handleAddMovie}>
            Save Details
          </button>
        </div>
      </div>
    </div>
  );
}
