import React, { useEffect, useState } from "react";
import moment from "moment";
import Modal from 'react-modal';
import { MdClosedCaptionOff, MdClose, MdArrowDropUp } from 'react-icons/md'

import { movie } from "../assets/data/movieDb";
import Navbar from "../components/Navbar";

import "../css/tickets.css";
import { boocked } from "../assets/data/bookings";
import { Link, redirect } from "react-router-dom";

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
    let admin = sessionStorage.getItem("isAdmin");
    if(admin) {
      setIsAdmin(true)
    }
  }, [])

  console.log(dates);

  return (
    <div className="ticket-sec">
      {movie &&
        <div
          className="ticket-header"
          style={{ backgroundImage: `url("${movie.backdrop_path}")` }}
        >
          <Navbar />
          <div className="movie-details">
            <img src={movie.poster_path} className="movie-poster" />
            <div className="details-text">
                <p>{movie.title}</p>
                <p>Director: {movie.director}</p>
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
                    <div className="ticket-time-block" onClick={(e) => selectDT(dt, "10:30A")}>
                      <p className="tm">10:30A</p>
                      <p className="tm-info">3D • <MdClosedCaptionOff size={20} /> Eng </p>
                    </div>
                    <div className="ticket-time-block" onClick={(e) => selectDT(dt, "2:00P")}>
                      <p className="tm">2:00P</p>
                      <p className="tm-info">4DX-3D • <MdClosedCaptionOff size={20} /> Eng </p>
                    </div>
                    <div className="ticket-time-block" onClick={(e) => selectDT(dt, "6:30P")}>
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
                            >{" "}</div>
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
