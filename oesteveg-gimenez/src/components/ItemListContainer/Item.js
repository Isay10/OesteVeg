import React from "react";
import "./Item.css";
import ItemCount from "./ItemCount";

const Item = ({ name, image, price, stock }) => {
  const onAdd = (qty) => {
    alert(
      `Se han agregado ${qty} ${qty > 1 ? "productos" : "producto"} al carrito`
    );
  };

  return (
    <div className="product-card">
      <img className="product-card__image" src={image} alt="image-food" />

      <h3 className="product-card__name">{name}</h3>
      <span className="product-card__name">${price}</span>

      <ItemCount stock={stock} onAdd={onAdd} initial={1} />
    </div>
  );
};

export default Item;
