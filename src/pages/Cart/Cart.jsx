import React from "react";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../utils";
import s from "./Cart.module.css";

export const Cart = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  return (
    <div className={s.cart}>
      {items.length > 0 ? (
        <>
          <ul className={s.itemList}>
            <li>
              {items.map((item) => {
                return (
                  <li className={s.item}>
                    <img
                      className={s.img}
                      src={item.productImage}
                      alt="product"
                    ></img>
                    <p>
                      {item.productName} - {item.price} $
                    </p>
                  </li>
                );
              })}
            </li>
          </ul>
          <button className={s.btn} type="button">
            Checkout
          </button>
          <p className={s.totalPrice}>{totalPrice} $</p>
        </>
      ) : (
        <p className={s.empty}>Cart is empty</p>
      )}
    </div>
  );
};
