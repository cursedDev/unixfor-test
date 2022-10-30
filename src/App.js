import { useEffect, useState } from "react";
import { TickesList } from "./organisms/ticketsList";
import { Login } from "./login";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// mock data
import { ticketsMock } from "./services";

import "./axiosConfig";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTickets([...ticketsMock]);
  }, []);

  return (
    <div className="App">
      {loggedIn ? (
        <div className="flex flex-col gap-4 py-4 px-4">
          <span className="flex w-full justify-center text-center font-bold text-black">
            User is logged in.
          </span>
          <TickesList tickets={tickets} setTickets={setTickets} />
        </div>
      ) : (
        <Login setLoggedIn={setLoggedIn} />
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
