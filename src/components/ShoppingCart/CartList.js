import { ProductContext } from "../../context";
import React, { useContext } from "react";
import CartItem from "./CartItem";

const CartList = () => {
  const { cart } = useContext(ProductContext);
  return (
    <div className="container-fluid">
      {cart.map((item) => {
        return <CartItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default CartList;
