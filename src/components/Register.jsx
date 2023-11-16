import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contextAPi/AuthProvider";

export default function Register() {
  const { createUser } = useContext(AuthContext);
  //   console.log(createUser);
  const handleRegister = (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;
    // console.log(userEmail, userPassword, userName);
    // create user
    createUser(userEmail, userPassword)
      .then((res) => {
        console.log(res.user);
      })
      .catch((e) => console.log(e.message));
  };
  return (
    <div className="max-w-4xl mx-auto my-10">
      <h1 className="text-center text-4xl font-bold">
        Please <span className="  text-yellow-700">Register </span>{" "}
      </h1>
      <form onSubmit={handleRegister}>
        <div className="flex flex-col gap-10 ml-32 my-4">
          <input
            className="w-3/4 px-4 py-3 border-2 rounded-md border-sky-200 active:border-blue-950"
            type="text"
            name="name"
            id="name"
            placeholder="name"
          />
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
        alreay have an account ?
        <Link
          className=" cursor-pointer text-white font-bold bg-green-700 border-0 px-4 py-2 rounded-md"
          to="/login"
        >
          Register
        </Link>{" "}
      </p>
    </div>
  );
}
