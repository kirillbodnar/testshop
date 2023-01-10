import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../utils";

export const Navbar = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="cart">
          <ShoppingCart size={32} />
          {items.length > 0 ? (
            <>
              <span>({items.length}) </span>
              <span>{totalPrice} $</span>
            </>
          ) : null}
        </Link>
      </div>
    </div>
  );
};
