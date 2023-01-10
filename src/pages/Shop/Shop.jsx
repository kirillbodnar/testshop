import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product/Product";
import "./Shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Gaming Neverland</h1>
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
