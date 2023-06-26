import React from "react";

export default function Card({ movie }) {
  return (
    <div style={{width: 'fit-content'}}>
      <div className="card movie-card" style={{ width: "18rem" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            {movie.original_title}
          </p>
        </div>
      </div>
    </div>
  );
}
