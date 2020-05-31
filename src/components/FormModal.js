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
  const sweetRadioButtons = [
    { value: "no-sugar", displayName: "No-Sugar" },
    { value: "one spoon", displayName: "One Spoon" },
    { value: " double-double", displayName: " Double-Double" },
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
    id,
    price,
  } = useContext(ProductContext);

  return (
    <React.Fragment>
      <form action="#" onSubmit={handleSubmit}>
        <fieldset className="form-group">
          <div className="row">
            <div className="col-sm-2 pt-0">
              <h5 className="title">size</h5>
              {sizeRadioButtons.map(({ value, displayName }, idx) => (
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="radio"
                      id={`size_${idx + 1}`}
                      name="size"
                      value={value}
                      checked={size === value}
                      onChange={sizeHandleChange}
                    />
                    {displayName}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </fieldset>

        <fieldset className="form-group">
          <div className="row">
            <div className="col-sm-10">
              <h5 className="title pt-4">milk</h5>
              {milkRadioButtons.map(({ value, displayName }, idx) => (
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="radio"
                      id={`milk_${idx}`}
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

        <fieldset className="form-group">
          <div className="row">
            <div className="col-sm-10">
              <h5 className="title pt-4">Sweetner</h5>
              {sweetRadioButtons.map(({ value, displayName }, idx) => (
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="radio"
                      id={`sweet_${idx}`}
                      name="sweet"
                      value={value}
                      checked={sweet === value}
                      //onChange helps me to put what the client chose in the state
                      onChange={sweetHandleChange}
                    />
                    {displayName}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </fieldset>

        <div className="d-flex justify-content-center py-3">
          <h4 className="px-2">Price {price} $</h4>
          <button
            className="btn btn-outline-info text-capitalize"
            type="submit"
            onClick={addToCart(id)}
          >
            add to cart
          </button>
        </div>
      </form>
      ;
    </React.Fragment>
  );
};

export default FormModal;
