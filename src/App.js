import { useEffect, useState } from "react";
import { TicketsList } from "./organisms/ticketsList";
import { Login } from "./login";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GetTickets } from "./services";

import { Button } from "./atoms/button";

// import "./axiosConfig";

import "./server";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    if (loggedIn) {
      GetTickets(
        (r) => setTickets(r.data),
        (e) => toast.error("Could not retrieve the current tickets.")
      );
    }
  }, [loggedIn]);

  return (
    <div className="App">
      {loggedIn ? (
        <div className="flex flex-col gap-4 py-4 px-2 lg:px-4">
          <div className="flex flex-row pb-4">
            <span className="flex w-full justify-center text-center font-bold text-black">
              User is logged in.
            </span>
            <Button
              className="place-self-center"
              onClick={() => setLoggedIn(false)}
              label={"logout"}
            />
          </div>
          <TicketsList tickets={tickets} setTickets={setTickets} />
        </div>
      ) : (
        <Login setLoggedIn={setLoggedIn} />
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
