import { ProductContext } from "../../context";
import React, { useContext } from "react";

const CartItem = ({ item }) => {
  //how many items are in the cart - of the specifice item - count
  const { id, title, img, price, count } = item;
  //in the value we have all the methods
  const { increment, decrement, removeItem, size, milk, sweet } = useContext(
    ProductContext
  );
  return (
    //every item we're going to return as a separate row
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2 py-2">
        <span className="d-lg-none">product: </span>
        {title}, {size} ,{milk} ,{sweet}
      </div>
      <div className="col-10 mx-auto col-lg-2 py-2">
        <span className="d-lg-none">price: </span>
        {price}$
      </div>
      <div className="col-10 mx-auto col-lg-2 py-2">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-2" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-2">{count}</span>
            <span className="btn btn-black mx-2" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 py-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 py-2">
        <strong>item total: ${price * count}</strong>
      </div>
    </div>
  );
};

export default CartItem;
