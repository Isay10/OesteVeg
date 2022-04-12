import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productList } from "../../services/mock.service.products.js";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [product, setProduct] = useState({});
  const [gotProduct, setGotProduct] = useState(false);

  let navigate = useNavigate();

  const onAdd = (qty) => {
    alert(
      `Se ${qty > 1 ? "han" : "ha"} agregado ${qty} ${
        qty > 1 ? "productos" : "producto"
      } al carrito`
    );
    setGotProduct(true);
  };

  const getItem = new Promise((res, rej) => {
    setTimeout(() => {
      res(productList);
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
    filterProductById(productList, id);
  }, [id]);

  const filterProductById = (array, id) => {
    return array.map((product) => {
      if (product.id === id) {
        return setProduct(product);
      }
    });
  };

  console.log("GotProduct: " + JSON.stringify(gotProduct));

  return (
    <div className="detail-list-container">
      <div className="detail-list-description-container">
        <img
          className="detail-card__image"
          src={detail[id]?.image}
          alt="image-food"
        />
        <p className="detail-description-text">{detail[0]?.description}</p>
      </div>
      <div className="detail-list-information-container">
        <h1>{detail[id]?.name}</h1>
        <h2>${detail[id]?.price}</h2>
        <h3>{detail[id]?.stock} unidades</h3>
        {!gotProduct ? (
          <ItemCount
            id={id}
            stock={detail[id]?.stock}
            onAdd={onAdd}
            initial={detail[id]?.stock === 0 ? 0 : 1}
          />
        ) : (
          <Button
            variant="contained"
            style={{
              backgroundColor: "#a6ffa5",
              borderRadius: "10px",
              height: "50%",
              marginTop: "10px",
            }}
            onClick={() => navigate(`/cart`)}
          >
            Ir al carrito
          </Button>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
