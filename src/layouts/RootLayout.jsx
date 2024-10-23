import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const RootLayout = () => {
  const { loggedIn } = useAuthContext();
  let location = useLocation();

  return (
    <>
      <header>
        <p id="logo">☾⋆⁺₊✧ NightWatch</p>
        <nav>
          {loggedIn && (
            <>
              {location.pathname === "/" && (
                <NavLink to="/logout">Logout</NavLink>
              )}
              {location.pathname === "/logout" && (
                <NavLink to="/">Home</NavLink>
              )}
            </>
          )}

          {location.pathname === "/login" && (
            <NavLink to="/register">Register</NavLink>
          )}

          {location.pathname === "/register" && (
            <NavLink to="/login">Login</NavLink>
          )}
        </nav>
      </header>
      <React.Fragment>
        <Outlet />
      </React.Fragment>
    </>
  );
};

export default RootLayout;
