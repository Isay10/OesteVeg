import React, { useEffect, useState } from "react";
import { onAdd } from "../../Common/commonMethods.js";
import { detailProduct } from "../../services/product.services/mock.service.detail.js";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = () => {
  const [detail, setDetail] = useState([]);

  const getItem = new Promise((res, rej) => {
    setTimeout(() => {
      res(detailProduct);
    }, 2000);
  });

  const getItemData = async () => {
    try {
      const result = await getItem;

      setDetail(result);
    } catch (error) {
      console.log(error);
      alert("No podemos mostrar los productos en este momento");
    }
  };

  useEffect(() => {
    getItemData();
  }, []);

  return (
    <div className="detail-list-container">
      <div className="detail-list-description-container">
        <img
          className="detail-card__image"
          src={detail[0]?.image}
          alt="image-food"
        />
        <p className="detail-description-text">{detail[0]?.description}</p>
      </div>
      <div className="detail-list-information-container">
        <h1>{detail[0]?.name}</h1>
        <h2>${detail[0]?.price}</h2>
        <h3>{detail[0]?.stock} unidades</h3>
        <ItemCount
          stock={detail[0]?.stock}
          onAdd={onAdd}
          initial={detail[0]?.stock === 0 ? 0 : 1}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
