import React, { useEffect, useState } from "react";
import moment from "moment";
import Modal from 'react-modal';
import { MdClosedCaptionOff, MdClose, MdArrowDropUp } from 'react-icons/md'

import { movie } from "../assets/data/movieDb";
import Navbar from "../components/Navbar";

import "../css/tickets.css";
// import { boocked } from "../assets/data/bookings";
import { Link, redirect } from "react-router-dom";
import { getCurrentMovie } from "../api/movieApi";
import { getBookingByDateAndShift } from "../api/bookingApi";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      cursor: 'pointer',
      caretColor: 'transparent',
    },
  };


  const boocked = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

export default function Tickets() {
  const [dates, setDates] = useState([]);
  const [booking, setBooking] = useState(boocked)
  const [seats, setSeats] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [isAdmin, setIsAdmin] = useState(false)
  const [dateTime, setDateTime] = useState({
    dt: '',
    tm: ''
  });
  const alpha = ['A','B', 'C','D','E','F','G','H', 'I']
  const [currMovie, setCurrMovie] = useState();

  useEffect(() => {
    let admin = sessionStorage.getItem("isAdmin");
    if (admin) {
      setIsAdmin(true);
    }
  }, []);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setBooking([
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ])
    setSeats([])
    setIsOpen(false);
  }

  const handleSeatSelect = (ri, ci) => {
    var tempArr = booking;
    tempArr[ri][ci] = -1;
    setSeats([...seats, `${alpha[ci]}${ri}`])

    console.log(tempArr, seats)
    setBooking(tempArr)
  }

  const doNothing = () => {
    return false;
  }

  const selectDT = (dt, tm) => {
    let queryDate = moment(dt).format('L')
    getBookingByDateAndShift({screeningDate:  queryDate, screeningShift: tm}).then((res) => {
      console.log(booking)
      if (res.length > 0) {
        res.map((bookedSeats) => {
          if (bookedSeats.seats.length > 0) {
            bookedSeats.seats.map((seat) => {
              let alphaRow = seat.substr(0, 1)
              let colNumber = Number(seat.substr(1))
              let rowNumber = alpha.indexOf(alphaRow)
              var tempArr = booking;
              tempArr[colNumber][rowNumber] = 1;
              setBooking([...tempArr])
            })
          }
        })
      } else {
        setBooking([
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
      ])
      }
    })
    setDateTime({dt, tm})
    openModal()
  }

  useEffect(() => {
    var date = new Date();
    let arr = [];
    for (let index = 0; index < 5; index++) {
      var dt = moment(date).add(index, "days");
      arr.push(dt);
    }
    setDates(arr);
  }, []);

  useEffect(() => {
    getCurrentMovie().then(res => {
      setCurrMovie(res);
    });
    let admin = sessionStorage.getItem("isAdmin");
    if(admin) {
      setIsAdmin(true)
    }
  }, [])

  return (
    <div className="ticket-sec">
      {currMovie &&
        <div
          className="ticket-header"
          style={{ backgroundImage: `url("${currMovie.bgImg}")` }}
        >
          <Navbar />
          <div className="movie-details">
            <img src={currMovie.poster} className="movie-poster" />
            <div className="details-text">
                <p>{currMovie.title}</p>
                <p>Director: {currMovie.director}</p>
            </div>
          </div>

          <div className="container booking">
            {dates.length > 0 &&
              dates.map((dt, index) =>
                <div className="row align-items-center ticket-block">
                  <div className="col-sm-12 col-md-4 col-lg-3 ticket-dt-cont">
                  <p className="dt">
                    {moment(dt).format("MMM Do YYYY")}
                  </p>
                  <small>{moment(dt).format("dddd")}</small>
                  </div>
                  <div className="col-sm-12 col-md-8  col-lg-9 ticket-time-cont">
                    <div className="ticket-time-block" onClick={(e) => selectDT(dt, "morning")}>
                      <p className="tm">10:30A</p>
                      <p className="tm-info">3D • <MdClosedCaptionOff size={20} /> Eng </p>
                    </div>
                    <div className="ticket-time-block" onClick={(e) => selectDT(dt, "noon")}>
                      <p className="tm">2:00P</p>
                      <p className="tm-info">4DX-3D • <MdClosedCaptionOff size={20} /> Eng </p>
                    </div>
                    <div className="ticket-time-block" onClick={(e) => selectDT(dt, "evening")}>
                      <p className="tm">6:30P</p>
                      <p className="tm-info">IMAX 3D • <MdClosedCaptionOff size={20} /> Eng </p>
                    </div>
                  </div>
                  {index < 4 ? <hr /> : <></>}
                </div>
              )}
          </div>
        </div>}
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <MdClose onClick={closeModal} />
        <div className="screen"></div>
        <p className="text-center mb-0 ">screen</p>
        <p className="text-center mb-0"><MdArrowDropUp size={40} /></p>
        <table>
            <tbody>
                {booking.map((row, ri) => (
                    <th>
                        {row.map((seat, ci) => (
                            <div 
                            className={"seats " + (seat == -1 ? 'selected' : seat == 1 ? 'filled' : 'empty')} 
                            onClick={() => {seat == 1 || seat == -1 || isAdmin ? doNothing() : handleSeatSelect(ri, ci)}}
                            // disable={seat == 1 || seat == -1 ? true : false}
                            >{" "} </div>
                        ))}
                    </th>
                ))}
            </tbody>
        </table>
        <br />
        <div className="row">
            <div className="seat-detail col">
                <div className="seats"></div>
                <p>AVAILABLE</p>
            </div>
            <div className="seat-detail col">
                <div className="seats filled"></div>
                <p>TAKEN</p>
            </div>
            {!isAdmin && <div className="seat-detail col">
                <div className="seats selected"></div>
                <p>SELECTED</p>
            </div>}
        </div>
        {!isAdmin && 
        <Link to={`/checkout?seats=${seats}&date=${dateTime.dt}&time=${dateTime.tm}`}>
          <button className="btn btn-primary w-100">PURCHASE TICKETS</button>
          </Link>}
      </Modal>
    </div>
  );
}
