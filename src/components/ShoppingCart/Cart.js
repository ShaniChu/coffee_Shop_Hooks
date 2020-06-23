import React, { useContext } from "react";
import { ProductContext } from "../../context";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = () => {
  const { cart } = useContext(ProductContext);

  if (cart.length > 0) {
    return (
      <div className="shoppingCart">
        <h2 className="text-capitalize text-center py-4">your cart</h2>
        <CartColumns />
        <CartList />
        <CartTotals />
      </div>
    );
  } else {
    return (
      <div className="shoppingCart">
        <EmptyCart />
      </div>
    );
  }
};
export default Cart;
