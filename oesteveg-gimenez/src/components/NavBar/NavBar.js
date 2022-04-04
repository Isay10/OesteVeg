import { Button } from "@mui/material";
import * as React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav-ul">
        <div className="nav-home">
          <li className="nav-li">
            {" "}
            <NavLink
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "activeHome" : "inactive"
              }
              to="/"
            >
              Oeste Veg
            </NavLink>
          </li>
        </div>
        <div className="nav-option">
          <li className="nav-li">
            <NavLink
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/quienes-somos"
            >
              <Button variant="text">¿Quiénes somos?</Button>
            </NavLink>
          </li>

          <li className="nav-li">
            <NavLink
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/category"
            >
              <Button variant="text">Categoria</Button>
            </NavLink>
          </li>
          <li className="nav-li">
            <CartWidget quantity={5} />
          </li>
        </div>
      </ul>
    </nav>
  );
}
