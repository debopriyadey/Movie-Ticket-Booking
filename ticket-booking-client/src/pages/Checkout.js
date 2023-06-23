import React, { useContext, useEffect, useState } from "react";
import Barcode from "react-barcode";
import moment from "moment";

import Navbar from "../components/Navbar";
import { movie } from "../assets/data/movieDb";

import "../css/checkout.css";
import { useSearchParams } from "react-router-dom";
import { register } from "../api/userApi";
import { insertBooking } from "../api/bookingApi";
import { getCurrentMovie } from "../api/movieApi";
import { MovieContext, UserContext } from "../context";

export default function Checkout() {
  const { user, setUser } = useContext(UserContext);
  const { movieId, setMovieId } = useContext(MovieContext);
  const [showPayment, setShowPayment] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [generate, setGenerate] = useState(false);
  const [seats, setSeats] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [rand, setRand] = useState("");
  const [booking, setBooking] = useState({
    movieId: movieId,
    userId: user.id,
    screeningDate: "",
    screeningShift: "",
    seats: []
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const setUserDetails = () => {
    if (user.name !== "" && user.email !== "") {
      setShowPayment(true);
    } else {
      alert("Fill all details");
    }
  };

  const handleConfirmPayment = () => {
    let dt = moment(date).format("L");
    setBooking({
      ...booking,
      screeningDate: dt,
      screeningShift: time,
      seats: [...seats],
    });
    setShowTicket(true)
  };

  const handleBooking = () => {
    insertBooking(booking).then(res => {
      setGenerate(true)
    });
    alert("Congratulations Booking Confirmed")
  }

  useEffect(() => {
    var seats = searchParams.get("seats").toString();
    var array = seats.split(",");
    setSeats([...array]);
    setDate(searchParams.get("date"));
    setTime(searchParams.get("time"));
    var random = (Math.random() * 1000000).toString();
    setRand(random.replace(".", ""));
  }, []);

  return (
    <div className="checkout-sec">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <div class="container">
              <div class="col mt-4 pt-2" id="accordions">
                <div class="component-wrapper rounded shadow">
                  <div class="p-4 border-bottom">
                    <h4 class="title mb-0">Checkout</h4>
                  </div>
                  <div class="p-4">
                    <div class="accordion pt-2" id="buyingquestion">
                      <div class="accordion-item rounded mt-2">
                        <h2 class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button border-0 bg-light collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            ENTER YOUR DETAILS
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="accordion-collapse border-0 collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#buyingquestion"
                        >
                          <div class="accordion-body text-muted bg-white">
                            <form className="user-form">
                              <div class="form-group">
                                <label
                                  for="NameInput"
                                  className="mx-2"
                                  style={{ color: "#1a1a1a" }}
                                >
                                  Your Name
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  name="Firstname"
                                  autoComplete
                                  value={user.name}
                                />
                              </div>
                              <div class="form-group">
                                <label
                                  for="NameInput"
                                  className="mx-2 mt-2"
                                  style={{ color: "#1a1a1a" }}
                                >
                                  Your Email ID
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  name="email"
                                  autoComplete="email"
                                  value={user.email}
                                />
                              </div>
                            </form>

                            <button
                              onClick={setUserDetails}
                              className="btn btn-primary"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-controls="collapseTwo"
                            >
                              {" "}Save Details
                            </button>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item rounded mt-2">
                        <h2 class="accordion-header" id="headingTwo">
                          <button
                            class="accordion-button border-0 bg-light collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            CONFIRM PAYMENT
                          </button>
                        </h2>
                        {showPayment &&
                          <div
                            id="collapseTwo"
                            class="accordion-collapse border-0 collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#buyingquestion"
                          >
                            <div class="accordion-body text-muted bg-white">
                              <p>
                                SEATS:{" "}
                                {seats.map(s =>
                                  <span>
                                    {s}{" "}
                                  </span>
                                )}
                              </p>
                              <p>
                                AMOUNT : {seats.length} X {movie.price} ={" "}
                                {seats.length * movie.price}
                              </p>
                              <br />
                              <button
                                className="btn btn-primary"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                                onClick={handleConfirmPayment}
                              >
                                Confirm Payment
                              </button>
                            </div>
                          </div>}
                      </div>
                      <div class="accordion-item rounded mt-2">
                        <h2 class="accordion-header" id="headingThree">
                          <button
                            class="accordion-button border-0 bg-light collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            GENERATE TICKETS
                          </button>
                        </h2>
                        {showTicket &&
                          <div
                            id="collapseThree"
                            class="accordion-collapse border-0 collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#buyingquestion"
                          >
                            <div class="accordion-body text-muted bg-white">
                              <p>
                                NAME : {user.name}
                              </p>
                              <p>
                                Email : {user.email}
                              </p>
                              <p>
                                SEATS:{" "}
                                {seats.map(s =>
                                  <span>
                                    {s}{" "}
                                  </span>
                                )}
                              </p>
                              <p>
                                SHOW:{" "}
                                {moment(date).format("dddd, MMM Do YYYY") +
                                  " | " +
                                  time}
                              </p>
                              <p>
                                AMOUNT : {seats.length * movie.price}
                              </p>
                              <button
                                onClick={handleBooking}
                                className="btn btn-primary"

                              >
                                Generate Ticket
                              </button>
                            </div>
                          </div>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 d-flex justify-content-center">
            <div
              class="card mt-5 ticket-card"
              style={{
                width: "18rem",
                backgroundImage: `url(https://images.unsplash.com/photo-1545129139-1beb780cf337?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80)`
              }}
            >
              <div class="transbox text-center">
                {generate &&
                  <div>
                    <div class="card-header">YOU'VE GOT TICKETS!</div>
                    <small>You may use the code below at entrance</small>
                  </div>}
                <div className="card tickets-detail">
                  <h3>MOVIE CAFE</h3>
                  <h5 className="hdr">ONWARD</h5>
                  <small>
                    {moment(date).format("dddd, MMM Do YYYY")} | {time}
                  </small>
                  {showTicket &&
                    <small>
                      SEATS:{" "}
                      {seats.map(s =>
                        <span>
                          {s}{" "}
                        </span>
                      )}
                    </small>}
                  {generate &&
                    <div className="bar-code">
                      <Barcode value={rand} className="bar-code" />
                    </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
