import { useEffect, useState } from "react";

import { UserContext } from "./context";
import BrowseRouter from "./BrowseRouter";
import { getById } from "./api/userApi";

function App() {

  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    role: ""
  })

  useEffect(() => {
    const id = sessionStorage.getItem('userId');
    if (id) {
      try {
        const res = getById(id);
        setUser(res)
      } catch (err) {
        console.error(err);
      }
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <BrowseRouter />
      </div>
    </UserContext.Provider>
  );
}

export default App;
