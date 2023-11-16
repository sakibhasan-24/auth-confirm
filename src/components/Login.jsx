import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();

    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;
  };
  return (
    <div className="max-w-4xl mx-auto my-10">
      <h1 className="text-center text-4xl font-bold">
        Please <span className="  text-yellow-700">Login </span>{" "}
      </h1>
      <form className="shadow-2xl  px-4 py-6" onSubmit={handleLogin}>
        <div className="flex flex-col gap-10 ml-32 my-4">
          <input
            className="w-3/4 px-4 py-3 border-2 rounded-md border-sky-200 active:border-blue-950"
            type="email"
            name="email"
            id="email"
            placeholder="email"
          />
          <input
            className="w-3/4 px-4 py-3 rounded-md border-2 border-sky-200 active:border-blue-950"
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="w-1/2 ml-44 cursor-pointer text-white font-bold bg-green-700 border-0 px-4 py-2 rounded-md"
        />
      </form>
      <p className="my-4 ">
        Haven't any account ?
        <Link
          className=" cursor-pointer text-white font-bold bg-green-700 border-0 px-4 py-2 rounded-md"
          to="/register"
        >
          Register
        </Link>{" "}
      </p>
    </div>
  );
}
