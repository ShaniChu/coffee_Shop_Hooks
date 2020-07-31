import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Default from "./components/Default";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { ProductContextProvider } from "./context";
import Cart from "./components/ShoppingCart/Cart";
import ProductList from "./components/ProductList";
import { Elements, StripeProvider } from "@strip/react-stripe-js";
import PaymentForm from "./components/ShoppingCart/PaymentForm";

function App() {
  return (
    <ProductContextProvider>
      <Navbar />
      <div className="products">
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </div>
      <StripeProvider apiKey="pk_test_51H9b9iFKY9fxobThOkCcW9UQ0k6qll0uJcPLTUDETRqCErRhJYiCfFkYrCRt5fiuFvAjLZUVG8k2JymD8RKkHeXX00vmYH72NB">
        <Elements>
          <PaymentForm />
        </Elements>
      </StripeProvider>
    </ProductContextProvider>
  );
}

export default App;
