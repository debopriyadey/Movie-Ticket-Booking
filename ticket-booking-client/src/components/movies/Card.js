import React from "react";

export default function Card({ movie }) {
  return (
    <div style={{width: 'fit-content'}}>
      <div class="card movie-card" style={{ width: "18rem" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <p class="card-text">
            {movie.original_title}
          </p>
        </div>
      </div>
    </div>
  );
}
