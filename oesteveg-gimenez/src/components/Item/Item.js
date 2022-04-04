import React from "react";
import "./Item.css";
import { onAdd } from "../../Common/commonMethods.js";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const Item = ({ name, image, price, stock, id }) => {
  return (
    <div className="product-card">
      <Link to={`/item/${id - 1}`}>
        <img className="product-card__image" src={image} alt="image-food" />

        <h3 className="product-card__name">{name}</h3>
        <span className="product-card__name">${price}</span>
      </Link>

      <ItemCount stock={stock} onAdd={onAdd} initial={stock === 0 ? 0 : 1} />
    </div>
  );
};

export default Item;
