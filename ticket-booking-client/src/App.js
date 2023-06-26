import { useEffect, useState } from "react";

import { MovieContext, UserContext } from "./context";
import BrowseRouter from "./BrowseRouter";
import { getById } from "./api/userApi";
import { getCurrentMovie } from "./api/movieApi";

function App() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    role: ""
  });

  const [movieId, setMovieId] = useState("");

  useEffect(() => {
    const id = sessionStorage.getItem("userId");
    if (id) {
      try {
        getById(id).then(res => {
          setUser(res);
        });
        getCurrentMovie().then(res => {
          setMovieId(res.id);
        });
      } catch (err) {
        console.error(err);
      }
    }
  }, []);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <MovieContext.Provider value={{ movieId, setMovieId }}>
        <div className="App">
          <BrowseRouter />
        </div>
      </MovieContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
