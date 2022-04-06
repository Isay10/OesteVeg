import React, { useEffect, useState } from "react";
import { productList } from "../../services/mock.service.products.js";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ param }) => {
  const [products, setProducts] = useState([]);
  /*  console.log("PAPAPAPA: " + JSON.stringify(props)); */

  const getProducts = new Promise((res, rej) => {
    setTimeout(() => {
      res(productList);
    }, 2000);
  });

  const getProductsData = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      console.log(error);
      alert("No podemos mostrar los productos en este momento");
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="product-list-container">
      {
        <>
          {param &&
            products
              .filter((product) => product.type === param)
              .map((product) => {
                return (
                  <div key={product.id}>
                    <Item
                      name={product.name}
                      image={product.image}
                      price={product.price}
                      stock={product.stock}
                      id={product.id}
                    />
                  </div>
                );
              })}
          {!param &&
            products.map((product) => {
              return (
                <div key={product.id}>
                  <Item
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    stock={product.stock}
                    id={product.id}
                  />
                </div>
              );
            })}
        </>
      }
    </div>
  );
};

export default ItemList;
