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
    </ProductContextProvider>
  );
}

export default App;
