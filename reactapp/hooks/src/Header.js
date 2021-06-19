import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";
const Header = () => {

  const location = useLocation()

  React.useEffect(() => {
    console.log('Mudou a rota');
  }, [location])
  return (
    <div>
      <nav>
        <NavLink to="/" activeStyle={{ color: "tomato" }} end>
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink activeStyle={{ color: "tomato" }} to="sobre">
          Sobre
        </NavLink>|{'  '}
        <NavLink activeStyle={{ color: "tomato" }} to="login">
          Login
        </NavLink>
      </nav>
      Esse é o meu header
    </div>
  );
};

export default Header;
