import { useState } from "react";
import { LoginCall, setAuthorization } from "./services";
import { toast } from "react-toastify";

export const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    let data = {
      username: username,
      password: password,
    };

    LoginCall(
      data,
      (r) => {
        setAuthorization(r.data);
        setLoggedIn(true);
      },
      (e) => toast.error(`Couldn't log in for some reason. ${e.status.code}`)
    );
  };

  return (
    <div className="flex justify-center items-cente h-screen">
      <div className="place-self-center flex flex-col gap-8 w-4/5 lg:w-1/3 border-2 bg-white shadow-md rounded px-8 pt-6 pb-8">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******************"
          />
        </div>
        <button
          className="bg-black text-white hover:bg-blue-dark font-bold py-2 px-4 rounded"
          type="button"
          onClick={() => submit()}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};
