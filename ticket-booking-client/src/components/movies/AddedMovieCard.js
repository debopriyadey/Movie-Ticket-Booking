import React, { useContext } from "react";
import { updateMovieScreening } from "../../api/movieApi";
import { MovieContext } from "../../context";

export default function AddedMovieCard({
  id,
  title,
  director,
  poster,
  releaseDate,
  description,
  screening,
  handleGetAllMovies
}) {
  

  const { movieId, setMovieId } = useContext(MovieContext)

  const handleScreeningUpdate = () => {
    updateMovieScreening(id).then((res) => {
      alert("Screening Updated");
      setMovieId(res.id);
      handleGetAllMovies()
    })
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div
          className="card mb-3 p-2 text-lg-start"
          style={{ maxWidth: "900px" }}
        >
          <div className="row g-0">
            <div className="col-md-4 col-lg-3">
              <img
                src={poster}
                className="img-fluid rounded-start"
                alt={title}
                height={300}
                width={150}
              />
            </div>
            <div className="col-md-8 col-lg-9">
              <div className="card-body">
                <h5 className="card-title">
                  {title}
                </h5>
                <small>
                  Director: {director}
                </small>
                <p className="card-text">
                  {description}
                </p>

                <p className="card-text">
                  <small className="text-muted">
                    {releaseDate}
                  </small>
                </p>

                <button className={"btn " + (screening===true ? "disabled": "btn-primary")} onClick={handleScreeningUpdate}>Set as Current</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
