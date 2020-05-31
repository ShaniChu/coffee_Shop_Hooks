import React, { useContext } from "react";
import { ProductContext } from "../context";
import Product from "./Product";

const ProductList = () => {
  const { products } = useContext(ProductContext);
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <div className="row">
            {products.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </div>

      <footer className="text-center">
        <p>
          <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is
          licensed by CC BY 3.0
        </p>
        <p>
          created by <span>shani chulin</span> 2020
        </p>
      </footer>
    </React.Fragment>
  );
};

export default ProductList;
