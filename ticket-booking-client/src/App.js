import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import Movies from './pages/Movies';
import Tickets from './pages/Tickets';
import Checkout from './pages/Checkout';
import MovieForm from './pages/MovieForm';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/form" element={<MovieForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
