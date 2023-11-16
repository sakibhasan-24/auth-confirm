import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-green-950 text-white font-bold mx-2 my-1 px-2 py-1 rounded-md ">
      <nav className="flex items-center justify-between px-4 py-3">
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="space-x-6">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      </nav>
    </header>
  );
}
