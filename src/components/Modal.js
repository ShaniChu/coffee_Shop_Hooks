import { ProductContext } from "../context";
import React, { useContext } from "react";
import FormModal from "./FormModal";
import Buttons from "./Buttons";

const Modal = () => {
  const { modalProduct: img, title, show } = useContext(ProductContext);

  if (!show) {
    return null;
  } else {
    return (
      <div className="modal-box">
        <div className="container">
          <div className="row">
            <div
              id="modal"
              className="col-8 mx-auto col-md-6 col-lg-4 items-center text-capitalize"
            >
              <h5 className="text-center mt-2">customize your drink</h5>
              <img src={img} className="img-fluid" alt="product" />
              <h5 className="form-title pb-3 text-center">{title}</h5>
              <FormModal />
              <Buttons />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
