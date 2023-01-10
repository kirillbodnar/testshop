import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, deleteItemFromCart } from "../../../redux/cart/reducer";
import "./Product.css";

export const Product = ({ data }) => {
  const { productName, price, productImage } = data;
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === data.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(data.id));
    } else {
      dispatch(addItemToCart(data));
    }
  };

  return (
    <div className="product">
      <img src={productImage} alt="product" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>{price} $</p>
      </div>
      <button
        className={isItemInCart ? "btn removeFromCart" : "btn addToCart"}
        onClick={handleClick}
      >
        {isItemInCart ? "Remove from cart" : "Add to cart"}
      </button>
    </div>
  );
};
