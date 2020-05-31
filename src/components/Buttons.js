import React, { useContext } from "react";
import { ProductContext } from "../context";
import { Link } from "react-router-dom";

const Buttons = () => {
  const { closeModal } = useContext(ProductContext);
  return (
    <div className="buttons text-center">
      <Link to="/">
        <button
          className="btn btn-warning mx-2 px-4 text-capitalize"
          onClick={closeModal}
        >
          back to the store
        </button>
      </Link>
      <Link to="/cart">
        <button
          className="btn btn-info my-2 text-capitalize" // disabled={inCart ? true : false}
          onClick={closeModal}
        >
          go to cart
        </button>
      </Link>
    </div>
  );
};

export default Buttons;
