import React from "react";
import "./Item.css";
import { onAdd } from "../../Common/commonMethods.js";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ name, image, price, stock }) => {
  return (
    <div className="product-card">
      <img className="product-card__image" src={image} alt="image-food" />

      <h3 className="product-card__name">{name}</h3>
      <span className="product-card__name">${price}</span>

      <ItemCount stock={stock} onAdd={onAdd} initial={stock === 0 ? 0 : 1} />
    </div>
  );
};

export default Item;
