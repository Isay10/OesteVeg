import { Button } from "@mui/material";
import * as React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav-ul">
        <div className="nav-home">
          <li className="nav-li">Oeste Veg</li>
        </div>
        <div className="nav-option">
          <li className="nav-li">
            <Button variant="text">¿Quiénes somos?</Button>
          </li>
          <li className="nav-li">
            <Button variant="text">Salado</Button>
          </li>
          <li className="nav-li">
            <Button variant="text">Dulce</Button>
          </li>
          <li className="nav-li">
            <CartWidget quantity={5} />
          </li>
        </div>
      </ul>
    </nav>
  );
}
