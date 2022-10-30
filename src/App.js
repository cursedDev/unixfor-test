import { useState } from "react";
import { TickesList } from "./organisms/ticketsList";
import { Login } from "./login";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// mock data
import { ticketsMock } from "./services";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  const notify = () => toast("Wow so easy!");

  return (
    <div className="App">
      <div className="h-screen w-screen flex flex-col px-4 py-4">
        {loggedIn ? (
          <>
            <span className="font-bold text-red-400">testing tailwind</span>
            <br />
            <TickesList tickets={ticketsMock} />
          </>
        ) : (
          <Login />
        )}
        <button onClick={notify}>test toast!</button>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
