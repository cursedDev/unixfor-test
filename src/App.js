import "./App.css";

import { TickesList } from "./organisms/ticketsList";
import { Login } from "./login";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const loggedIn = false;

  const notify = () => toast("Wow so easy!");

  return (
    <div className="App">
      <div className="h-screen w-screen flex flex-col">
        {loggedIn ? (
          <>
            <span className="font-bold text-red-400">testing tailwind</span>
            <br />
            <TickesList />
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
