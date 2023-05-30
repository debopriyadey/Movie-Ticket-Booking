import React, { useEffect, useState } from "react";
import AddedMovieCard from "../components/movies/AddedMovieCard";
import { getAllMovie } from "../api/movieApi";
import "../css/movieList.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { MdAddCircle } from "react-icons/md";

export default function MovieList() {
  const [movieList, setMovieList] = useState([
    {
      title: "",
      director: "",
      poster: "",
      releaseDate: "",
      description: "",
      screening: false
    }
  ]);

  useEffect(() => {
    getAllMovie().then(res => {
      setMovieList(res);
    });
  }, []);

  return (
    <div className="movie-list-sec">
      <Navbar />
      {movieList.map(movie =>
        <AddedMovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          director={movie.director}
          poster={movie.poster}
          releaseDate={movie.releaseDate}
          description={movie.description}
          screening={movie.screening}
        />
      )}
      <Link to={"/addmovies"}>
        <button className="btn btn-primary add-movie-btn"><MdAddCircle size={20} />  Add Movie </button>
      </Link>
    </div>
  );
}
