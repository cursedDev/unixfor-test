export const Login = ({ setLoggedIn }) => {
  return (
    <div class="h-full justify-center flex">
      <div className="flex flex-col gap-8 w-1/3 border-2 place-self-center mx-auto items bg-white shadow-md rounded px-8 pt-6 pb-8">
        <div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 mb-3"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <button
          class="bg-black text-white hover:bg-blue-dark font-bold py-2 px-4 rounded"
          type="button"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};
