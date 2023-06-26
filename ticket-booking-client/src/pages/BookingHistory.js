import React, { useContext, useEffect, useState } from "react";
import "../css/bookingHistory.css";
import BookingCard from "../components/movies/BookingCard";
import { UserContext } from "../context";
import { getBookingByUserId } from "../api/bookingApi";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { MdAddCircle } from "react-icons/md";

export default function BookingHistory() {
  const { user, setUser } = useContext(UserContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookingByUserId(user.id).then(res => {
      setBookings(res);
    });
  }, []);

  return (
    <div>
      <div className="booking-history-sec">
        <Navbar />
        <div className="container my-5">
          <div className="row justify-content-center">
            {bookings.map(booking =>
              <div className="col-sm-12 col-md-6">
                <BookingCard key={booking.id} booking={booking} />
              </div>
            )}
          </div>
        </div>
        <Link to={"/tickets"}>
          <button className="btn btn-primary book-movie-btn">
            <MdAddCircle size={20} /> Book Tickets{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}
