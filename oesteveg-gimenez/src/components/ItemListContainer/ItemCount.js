import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./ItemCount.css";

export default function ItemCount({ initial, stock, onAdd, product }) {
  //hook de estado
  const [quantity, setQuantity] = useState(initial);
  const onIncrease = () => {
    setQuantity(quantity + 1);
  };
  const onDecrease = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="card-container">
      <h3>{product}</h3>
      <div className="card-buttons-container">
        <button
          className="card-buttons"
          onClick={() => onDecrease()}
          disabled={quantity === 0}
        >
          -
        </button>

        <div>{stock === 0 ? "Sin Stock" : quantity}</div>

        <button
          className="card-buttons"
          onClick={() => onIncrease()}
          disabled={quantity >= stock}
        >
          +
        </button>
      </div>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#a6ffa5",
          borderRadius: "10px",
          height: "50%",
          marginTop: "10px",
        }}
        onClick={() => onAdd(quantity)}
        disabled={quantity === 0 || stock === 0 ? true : null}
      >
        Añadir
      </Button>
    </div>
  );
}
