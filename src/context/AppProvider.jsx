import { createContext, useEffect, useState } from "react";
import { products } from "../mocks/products";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [productsHome, setProductsHome] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [inCartAlert, setInCartAlert] = useState(0);

  const onAddCart = (item, quantity) => {
    if (isInCart(item.id)) {
      // If product is in the cart, update the quantity
      cartProducts.filter((item) => (item.quantity += quantity));
    } else {
      // List products in the cart
      setCartProducts([...cartProducts, { ...item, quantity }]);
      // Sum 1 to show in cartWidget.jsx
      setInCartAlert(inCartAlert + 1);
    }
  };

  // Check if products id are the same
  const isInCart = (id) => cartProducts.find((item) => item.id === id);

  const emptyCart = () => {
    setCartProducts([]);
    setInCartAlert(0);
  };

  const removeItem = (id) => {
    const newCart = cartProducts.filter((item) => item.id !== id);
    setCartProducts(newCart);
    setInCartAlert(inCartAlert - 1)
  };

  const totalPrice = () => {
    let acc = 0;
    for (const item of cartProducts) {
      acc += item.quantity * item.price;
    }
    return acc;
  };

  const isLoading = (param) => {
    setLoading(param);
  };

  // Promise for home's products
  const getProductsHome = () =>
    new Promise((resolve, reject) => {
      resolve(products);
    });

  useEffect(() => {
    getProductsHome().then((prod) => setProductsHome(prod));
  }, []);

  // Get products smaller than 6(number of id)
  const productsHomeFilter = productsHome.filter(
    (prodsHome) =>
      prodsHome.price > 400 && prodsHome.price <= 1000 && prodsHome.stock > 1
  );

  return (
    <AppContext.Provider
      value={{
        loading,
        isLoading,
        productsHomeFilter,
        onAddCart,
        cartProducts,
        emptyCart,
        removeItem,
        totalPrice,
        inCartAlert
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
export default AppContext;
