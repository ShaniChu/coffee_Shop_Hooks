import React, { useContext } from "react";
import { ProductContext } from "../context";

const FormModal = () => {
  const sizeRadioButtons = [
    { value_S: "small", displayName_S: "Small" },
    { value_S: "medium", displayName_S: "Medium" },
    { value_S: "large", displayName_S: "Large" },
  ];
  const milkRadioButtons = [
    { value_M: "no milk", displayName_M: "No Milk" },
    { value_M: "whole milk", displayName_M: "Whole Milk" },
    { value_M: "soy milk", displayName_M: "Soy Milk" },
    { value_M: "almond milk", displayName_M: "Almond Milk" },
  ];
  const sweetRadioButtons = [
    { value_W: "no-sugar", displayName_W: "No-Sugar" },
    { value_W: "one spoon", displayName_W: "One Spoon" },
    { value_W: " double-double", displayName_W: " Double-Double" },
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
        <fieldset className="form-group size">
          <div className="row">
            <div className="col-sm-2 pt-0">
              <h5 className="title">size</h5>
              {sizeRadioButtons.map((value_S, displayName_S, idx) => (
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="radio"
                      id={`size_${idx}`}
                      name="size"
                      value={value_S}
                      checked={size === value_S}
                      onChange={sizeHandleChange}
                    />
                    {displayName_S}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </fieldset>

        <fieldset className="form-group milk">
          <div className="row">
            <div className="col-sm-10">
              <h5 className="title pt-4">milk</h5>
              {milkRadioButtons.map((value_M, displayName_M, idy) => (
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="radio"
                      id={`milk_${idy}`}
                      name="milk"
                      value={value_M}
                      checked={milk === value_M}
                      onChange={milkHandleChange}
                    />
                    {displayName_M}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </fieldset>

        <fieldset className="form-group sugar">
          <div className="row">
            <div className="col-sm-10">
              <h5 className="title pt-4">Sweetner</h5>
              {sweetRadioButtons.map((value_W, displayName_W, idz) => (
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="radio"
                      id={`sweet_${idz}`}
                      name="sweet"
                      value={value_W}
                      checked={sweet === value_W}
                      //onChange helps me to put what the client chose in the state
                      onChange={sweetHandleChange}
                    />
                    {console.log(idz)}
                    {displayName_W}
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
