import React, { useState } from "react";
import "../css/form.css";
import Navbar from "../components/Navbar";

export default function MovieForm() {
  const [movie, setMovie] = useState({
    title: "Avatar: The Way of Water",
    backdrop_path:
      "https://media.cnn.com/api/v1/images/stellar/prod/221124100418-avatar-the-way-of-water-2022.jpg?c=original",
    poster_path:
      "https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_FMjpg_UX1000_.jpg",
    release_date: "16 December 2022",
    original_language: "English",
    runtime: "120",
    rating: "R",
    casts: [
      "Zoe Saldaña",
      "Sam Worthington",
      "Sigourney Weaver",
      "Michelle Rodriguez",
      "Joel David Moore"
    ],
    director: "James Cameron",
    overview:
      "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    price: 180
  });

  return (
    <div
      className="movie-form-sec"
      style={{ backgroundImage: `url("${movie.backdrop_path}")` }}
    >
      <Navbar />
      <div className="container mt-5 py-5">
        <div className="row movie-form-cont">
          {/* <form className=""> */}
          <div className="col-sm-12 col-md-6">
            <div class="form-group row">
              <label class="col-form-label">Title</label>
              <br />
              <div class="">
                <input
                  type="text"
                  readonly
                  class="form-control"
                  id="title"
                  onChange={e => setMovie({ ...movie, title: e.target.value })}
                  value={movie.title}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div class="form-group row">
              <label class="col-form-label">Director</label>
              <br />
              <div class="">
                <input
                  type="text"
                  readonly
                  class="form-control"
                  id="director"
                  onChange={e =>
                    setMovie({ ...movie, director: e.target.value })}
                  value={movie.director}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12">
            <div class="form-group row">
              <label for="inputPassword" class="col-form-label">
                Background Image
              </label>
              <br />
              <div class="">
                <input
                  type="text"
                  class="form-control"
                  id="backdrop_path"
                  onChange={e =>
                    setMovie({ ...movie, backdrop_path: e.target.value })}
                  value={movie.backdrop_path}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12">
            <div class="form-group row">
              <label class="col-form-label">Poster</label>
              <br />
              <div class="">
                <input
                  type="text"
                  readonly
                  class="form-control"
                  id="poster_path"
                  onChange={e =>
                    setMovie({ ...movie, poster_path: e.target.value })}
                  value={movie.poster_path}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div class="form-group row">
              <label class="col-form-label">Release Date</label>
              <br />
              <div class="">
                <input
                  type="text"
                  readonly
                  class="form-control"
                  id="release_date"
                  onChange={e =>
                    setMovie({ ...movie, release_date: e.target.value })}
                  value={movie.release_date}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div class="form-group row">
              <label class="col-form-label">Language</label>
              <br />
              <div class="">
                <input
                  type="text"
                  readonly
                  class="form-control"
                  id="original_language"
                  onChange={e =>
                    setMovie({ ...movie, original_language: e.target.value })}
                  value={movie.original_language}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div class="form-group row">
              <label class="col-form-label">Runtime</label>
              <br />
              <div class="">
                <input
                  type="text"
                  readonly
                  class="form-control"
                  id="runtime"
                  onChange={e =>
                    setMovie({ ...movie, runtime: e.target.value })}
                  value={movie.runtime}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div class="form-group row">
              <label class="col-form-label">Rating</label>
              <br />
              <div class="">
                <input
                  type="text"
                  readonly
                  class="form-control"
                  id="rating"
                  onChange={e => setMovie({ ...movie, rating: e.target.value })}
                  value={movie.rating}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-12">
            <div class="form-group row">
              <label class="col-form-label">Description</label>
              <br />
              <div class="">
                <textarea
                  rows={4}
                  type="text"
                  readonly
                  class="form-control"
                  id="overview"
                  onChange={e =>
                    setMovie({ ...movie, overview: e.target.value })}
                  value={movie.overview}
                />{" "}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div class="form-group row">
              <label class="col-form-label">Ticket Price</label>
              <br />
              <div class="">
                <input
                  type="text"
                  readonly
                  class="form-control"
                  id="price"
                  onChange={e => setMovie({ ...movie, price: e.target.value })}
                  value={movie.price}
                />
              </div>
            </div>
            {/* </form> */}
          </div>
          <button className="btn btn-primary w-100">Save Details</button>
        </div>
      </div>
    </div>
  );
}
