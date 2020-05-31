import React, { useState, useEffect } from "react";
import { coffeeList, detailProduct } from "./data";

const ProductContext = React.createContext();

const ProductContextProvider = (props) => {
  const [size, setSize] = useState(" ");
  const [milk, setMilk] = useState(" ");
  const [sweet, setSweet] = useState(" ");
  const [products, setProducts] = useState(coffeeList);
  const [show, setShow] = useState("true");
  const [cart, setCart] = useState([]);
  const [crartSubTotal, setCrartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [modalProduct, setModalProduct] = useState(detailProduct);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function sizeHandleChange(event) {
    setSize(event.target.value);
  }

  function milkHandleChange(event) {
    setMilk(event.target.value);
  }

  function sweetHandleChange(event) {
    setSweet(event.target.value);
  }

  useEffect(() => {
    copyProducts();
  });

  const copyProducts = () => {
    let tempProducts = [];
    products.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    setProducts(tempProducts);
  };

  function getItem(id) {
    const product = [...products].find((item) => item.id === id);
    return product;
  }

  function addToCart(id) {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    console.log(product);
    product.count = 1;
    setCart([...cart]);
    setProducts(tempProducts);
  }

  function openModal(id) {
    const modalProduct = getItem(id);
    setShow("true");
    setModalProduct(modalProduct);
  }

  function closeModal() {
    setShow("false");
  }

  function clearCart() {
    setCart([]);
    copyProducts();
    addTotals();
  }

  function increment(id) {
    //temp cart values, [...cart]
    let tempCart = setCart([...cart]);
    //finding the product the client selected in the cart (pressed on the + sign)
    const selectedProduct = tempCart.find((item) => item.id === id);
    //We need to find the item specific index
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count++;
    product.total = product.count * product.price;
    setCart([...tempCart]);
    addTotals();
  }

  function decrement(id) {
    //temp cart values
    let tempCart = setCart([...cart]);
    //finding the product the client selected in the cart (pressed on the + sign)
    const selectedProduct = tempCart.find((item) => item.id === id);
    //We need to find the item specific index
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count--;

    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;
    }
    setCart([...tempCart]);
    addTotals();
  }

  function removeItem(id) {
    let tempProducts = [...products];
    let tempCart = [...cart];

    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removeProduct = tempProducts[index];
    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;

    setCart([...tempCart]);
    setProducts([...tempProducts]);
    addTotals();
  }

  function addTotals() {
    let subTotal = 0;
    [...cart].map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.13;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    setCrartSubTotal(subTotal);
    setCartTax(tax);
    setCartTotal(total);
  }

  return (
    <ProductContext.Provider
      value={{
        sweet,
        milk,
        size,
        show,
        products,
        cart,
        cartTotal,
        cartTax,
        crartSubTotal,
        modalProduct,
        addToCart,
        openModal,
        closeModal,
        increment,
        decrement,
        removeItem,
        clearCart,
        sizeHandleChange,
        milkHandleChange,
        sweetHandleChange,
        handleSubmit,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export { ProductContextProvider, ProductContext };
