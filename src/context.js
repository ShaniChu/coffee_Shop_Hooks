import React, { useState, useEffect, useCallback } from "react";
import { coffeeList, detailProduct } from "./data";

const ProductContext = React.createContext();

const ProductContextProvider = (props) => {
  const [size, setSize] = useState(" ");
  const [milk, setMilk] = useState(" ");
  const [sweet, setSweet] = useState(" ");
  const [products, setProducts] = useState(coffeeList);
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState(0);
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

  const ProductsLoad = () => {
    const copyProducts = useCallback(() => {
      const newProducts = products.map((p) => ({ ...p }));
      setProducts(newProducts);
    }, []);

    useEffect(() => {
      copyProducts();
    }, [copyProducts]);
  };

  function getItem(id) {
    const product = [...products].find((item) => item.id === id);
    return product;
  }

  function addToCart(id) {
    //*arrays' contents can be changed even when they're const
    //* because they're reference types, they contain pointers to other values
    //*the array never changes, only it's content
    const newProducts = [...products];
    const product = newProducts.find((item) => item.id === id);

    if (product) {
      product.count = 1;
      setProducts(newProducts);
      setCart((cart) => [...cart, product]);
    }
  }

  function openModal(id) {
    const modalProduct = getItem(id);
    setShow(true);
    setModalProduct(modalProduct);
  }

  function closeModal() {
    setShow(false);
  }

  function clearCart() {
    setCart([]);
    ProductsLoad();
    addTotals();
  }

  function increment(id) {
    //temp cart values, [...cart]
    let tempCart = [...cart];
    //finding the product the client selected in the cart (pressed on the + sign)
    const selectedProduct = tempCart.find((product) => product.id === id);
    //We need to find the product specific index
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count++;
    product.total = product.count * product.price;
    setCart([...tempCart]);
    addTotals();
  }

  function decrement(id) {
    //temp cart values
    let tempCart = [...cart];
    //finding the product the client selected in the cart (pressed on the + sign)
    const selectedProduct = tempCart.find((product) => product.id === id);
    //We need to find the item specific index
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count--;

    if (product.count == 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;
    }
    setCart([...tempCart]);
    addTotals(product.total);
  }

  function removeItem(id) {
    let tempProducts = [...products];
    let tempCart = [...cart];

    tempCart = tempCart.filter((product) => product.id !== id);
    const index = tempProducts.indexOf(getItem(id));
    let removeProduct = tempProducts[index];
    removeProduct.count = 0;
    removeProduct.total = 0;

    setCart([...tempCart]);
    setProducts([...tempProducts]);
    addTotals();
  }

  function addTotals(subTotal) {
    setCartSubTotal([...cart].map((item) => (subTotal += item.total)));
    const tempTax = subTotal * 0.13;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
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
        cartSubTotal,
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
