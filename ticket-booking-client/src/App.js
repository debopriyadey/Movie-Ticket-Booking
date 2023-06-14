import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Tickets from "./pages/Tickets";
import Checkout from "./pages/Checkout";
import MovieForm from "./pages/MovieForm";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MovieList from "./pages/MovieList";
import { useEffect, useState } from "react";

function App() {
  const [role, setRole] = useState(false);
  useEffect(() => {
    let userType = sessionStorage.getItem("role");
    if (userType) {
      setRole(userType);
    }
    console.log(role)
  }, []);


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {role == "admin" &&
            <>
              <Route path="/addmovies" element={<MovieForm />} />
              <Route path="/movielist" element={<MovieList />} />
              <Route path="/tickets" element={<Tickets />} />
            </>}
          {role == "user" &&
            <>
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/checkout" element={<Checkout />} />
            </>}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
