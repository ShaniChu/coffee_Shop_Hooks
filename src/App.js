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
import { StripeProvider, Elements } from "react-stripe-elements";
import PaymentForm from "./PaymentForm";

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
      <StripeProvider apiKey="">
        <Elements></Elements>
      </StripeProvider>
    </ProductContextProvider>
  );
}

export default App;
