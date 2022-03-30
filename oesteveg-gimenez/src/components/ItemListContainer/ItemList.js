import React, { useEffect, useState } from "react";
import { productList } from "../../mockItem.js";
import Item from "./Item";
import "./ItemList.css";

const ItemList = () => {
  const [products, setProducts] = useState([]);

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
          {products.map((product) => {
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
