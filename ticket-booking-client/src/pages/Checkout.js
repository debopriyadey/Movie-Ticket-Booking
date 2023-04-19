import React, { useEffect, useState } from "react";
import Barcode from "react-barcode";
import moment from "moment";

import Navbar from "../components/Navbar";
import { movie } from "../assets/data/movieDb";

import "../css/checkout.css";
import { useSearchParams } from "react-router-dom";

export default function Checkout() {
  const [showPayment, setShowPayment] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [generate, setGenerate] = useState(false);
  const [seats, setSeats] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [rand, setRand] = useState("");
  const [user, setUser] = useState({
    name: "",
    phone: ""
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const setUserDetails = () => {
    if (user.name !== "" && user.phone !== "") {
      setShowPayment(true);
    } else {
      alert("Fill all details");
    }
  };

  useEffect(() => {
    var seats = searchParams.get("seats").toString();
    var array = seats.split(",");
    setSeats(array);
    setDate(searchParams.get("date"));
    setTime(searchParams.get("time"));
    var random = (Math.random() * 1000000).toString()
    setRand(random.replace(".", ''))
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
                                  onChange={e =>
                                    setUser({ ...user, name: e.target.value })}
                                  value={user.name}
                                />
                              </div>
                              <div class="form-group">
                                <label
                                  for="NameInput"
                                  className="mx-2 mt-2"
                                  style={{ color: "#1a1a1a" }}
                                >
                                  Your Phone Number
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  name="Phone number"
                                  autoComplete="Phone Number"
                                  onChange={e =>
                                    setUser({ ...user, phone: e.target.value })}
                                  value={user.phone}
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
                                AMOUNT : {seats.length} X {movie.price} = {seats.length * movie.price}
                              </p>
                              <br />
                              <button
                                onClick={() => setShowTicket(true)}
                                className="btn btn-primary"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
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
                                PHONE : {user.phone}
                              </p>
                              <p>
                                SEATS:{" "}
                                {seats.map(s =>
                                  <span>
                                    {s}{" "}
                                  </span>
                                )}
                              </p>
                              <p>SHOW: {moment(date).format("dddd, MMM Do YYYY")+" | "+time}</p>
                              <p>
                                AMOUNT : {seats.length * movie.price}
                              </p>
                              <button
                                onClick={() => setGenerate(true)}
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
                backgroundImage: `url("${movie.backdrop_path}")`
              }}
            >
              <div class="transbox text-center">
                {generate &&
                  <>
                    <div class="card-header">YOU'VE GOT TICKETS!</div>
                    <small>You may use the code below at entrance</small>
                  </>
                }
                <div className="card tickets-detail">
                  <h3>MOVIE CAFE</h3>
                  <h5 className="hdr">ONWARD</h5>
                  <small>{moment(date).format("dddd, MMM Do YYYY")} | {time}</small>
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
