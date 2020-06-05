import React, { useContext } from "react";
import { ProductContext } from "../context";
import PropTypes from "prop-types";

const Product = ({ product }) => {
  const { openModal } = useContext(ProductContext);
  const { id, title, img, price } = product;

  return (
    <div className="col-8 mx-auto col-lg-4 col-md-4">
      <div className="card mt-3"></div>
      <div className="img-container p-3">
        <div className="coffeType">
          <img
            src={img}
            alt="coffe type"
            className="card-img-top"
            onClick={() => openModal(id)}
          />
          <div className="d-flex justify-content-between pb-3">
            <h5 className="title">{title}</h5>
            <h5 className="price">{price}$</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Product;
