import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contextAPi/AuthProvider";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  return (
    <header className="bg-green-950 text-white font-bold mx-2 my-1 px-2 py-1 rounded-md ">
      <nav className="flex items-center justify-between px-4 py-3">
        <div>
          <NavLink to="/">{user?.email || "hello"}</NavLink>
        </div>
        <div className="space-x-6">
          {user?.email ? (
            <NavLink onClick={handleLogOut} to="/login">
              LogOut
            </NavLink>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
          <NavLink to="/register">Register</NavLink>
        </div>
      </nav>
    </header>
  );
}
