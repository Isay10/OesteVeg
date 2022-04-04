import React, { useEffect, useState } from "react";
import { productList } from "../../services/mock.service.products.js";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ type }) => {
  const [products, setProducts] = useState([]);
  console.log(products);

  const getProducts = new Promise((res, rej) => {
    setTimeout(() => {
      res(productList);
    }, 2000);
  });

  const getProductsData = async () => {
    try {
      const result = await getProducts;
      /*  const test = () => {
        result.filter((product) => product.type);
      };
      test(); */
      setProducts(result);
      /*  console.log(test()); */
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
          {type &&
            products
              .filter((product) => product.type === type)
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
          {!type &&
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
