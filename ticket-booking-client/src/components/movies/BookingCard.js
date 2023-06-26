import React, { useEffect, useState } from "react";
import { getMoviesById } from "../../api/movieApi";

export default function BookingCard({ booking }) {
  const [movie, setMovie] = useState({
    title: "",
    poster: "",
    description: ""
  });

  useEffect(() => {
    getMoviesById(booking.movieId).then(res => {
      setMovie(res);
    });
  }, []);

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={movie.poster}
            className="img-fluid rounded-start p-2 rounded"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {movie.title}
            </h5>
            <p className="card-text">
              {movie.description}
            </p>
            <p className="card-text">
              <strong>Show : </strong>
              <small className="text-body-secondary">
                {booking.screeningDate} | {booking.screeningShift}
              </small>
            </p>
            <p>
              <strong>Seats : </strong>{" "}
              {booking.seats.map(seat =>
                <span>
                  {" "}{seat}{" "}
                </span>
              )}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
