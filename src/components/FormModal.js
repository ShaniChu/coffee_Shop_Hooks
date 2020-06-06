import React, { useContext } from "react";
import { ProductContext } from "../context";

const FormModal = () => {
  const sizeRadioButtons = [
    { value: "small", displayName: "Small" },
    { value: "medium", displayName: "Medium" },
    { value: "large", displayName: "Large" },
  ];

  const milkRadioButtons = [
    { value: "no milk", displayName: "No Milk" },
    { value: "whole milk", displayName: "Whole Milk" },
    { value: "soy milk", displayName: "Soy Milk" },
    { value: "almond milk", displayName: "Almond Milk" },
  ];

  const {
    sizeHandleChange,
    milkHandleChange,
    sweetHandleChange,
    handleSubmit,
    addToCart,
    size,
    milk,
    sweet,
    modalProduct: { id, price },
  } = useContext(ProductContext);

  return (
    <React.Fragment>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <fieldset className="form-group size">
            <div className="row">
              <div className="col-sm-2 pt-0">
                <h5 className="title">size</h5>
                {sizeRadioButtons.map(({ value, displayName }, idx) => (
                  <div key={`size-${idx}`}>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          className="form-check-input"
                          type="radio"
                          id={`size-${idx}`}
                          name="size"
                          value={value}
                          checked={size === value}
                          onChange={sizeHandleChange}
                        />
                        {console.log(id)}
                        {displayName}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </fieldset>
        </div>
        <div>
          <fieldset className="form-group milk">
            <div className="row">
              <div className="col-sm-10">
                <h5 className="title pt-4">milk</h5>
                {milkRadioButtons.map(({ value, displayName }, idx) => (
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        id={`milk-${idx}`}
                        name="milk"
                        value={value}
                        checked={milk === value}
                        onChange={milkHandleChange}
                      />
                      {displayName}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </fieldset>
        </div>

        <div className="d-flex justify-content-center py-3">
          <h4 className="px-2">Price {price} $</h4>
          <button
            className="btn btn-outline-info text-capitalize"
            type="submit"
            onClick={() => addToCart(id)}
          >
            add to cart
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default FormModal;
