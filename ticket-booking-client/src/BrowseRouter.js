import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Tickets from "./pages/Tickets";
import Checkout from "./pages/Checkout";
import MovieForm from "./pages/MovieForm";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MovieList from "./pages/MovieList";
import { UserContext } from "./context";
import BookingHistory from './pages/BookingHistory';

export default function BrowseRouter() {

    const { user, setUser } = useContext(UserContext)

    return (
        <Router>
            <Routes>
                <Route path="*" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {user.role == "admin" &&
                    <>
                        <Route path="/addmovies" element={<MovieForm />} />
                        <Route path="/movielist" element={<MovieList />} />
                        <Route path="/tickets" element={<Tickets />} />
                    </>}
                {user.role == "user" &&
                    <>
                        <Route path="/history" element={<BookingHistory />} />
                        <Route path="/tickets" element={<Tickets />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </>}
            </Routes>
        </Router>
    )
}
