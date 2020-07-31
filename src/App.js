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
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./components/ShoppingCart/PaymentForm";

const stripePromise = loadStripe(
  "pk_test_51H9b9iFKY9fxobThOkCcW9UQ0k6qll0uJcPLTUDETRqCErRhJYiCfFkYrCRt5fiuFvAjLZUVG8k2JymD8RKkHeXX00vmYH72NB"
);

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
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </ProductContextProvider>
  );
}

export default App;
