import { createContext, useEffect, useState } from "react";
import { DB } from "../firebase/firebaseconfig";
import { collection, getDocs } from "firebase/firestore";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [productsHome, setProductsHome] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [inCartAlert, setInCartAlert] = useState(0);

  const onAddCart = (item, quantity) => {
    if (isInCart(item.id)) {
      // If product is in the cart, update the quantity
      const newCart = cartProducts.map((inCartItem) => {
        if (inCartItem.id === item.id) {
          return { ...item, quantity: inCartItem.quantity += quantity };
        } else {
          return inCartItem;
        }
      });
      setCartProducts(newCart);
      // If is in cart also update the quantity of cart widget alert (small circle red)
      setInCartAlert(inCartAlert + quantity);
    } else {
      // List products in the cart
      setCartProducts([...cartProducts, { ...item, quantity }]);
      // Sum 1 to show in cartWidget.jsx
      setInCartAlert(inCartAlert + quantity);
    }
  };

  // Check if products id are the same
  const isInCart = (id) => cartProducts.find((item) => item.id === id);

  const emptyCart = () => {
    setCartProducts([]);
    setInCartAlert(0);
  };

  const removeItem = (id, quantity) => {
    const newCart = cartProducts.filter((item) => item.id !== id);
    setCartProducts(newCart);
    setInCartAlert(inCartAlert - quantity);

    // Set the value of cart widget if cartProducts is 0
    // In this case it's in 1 because all the functions in context are async
    if (cartProducts.length === 1) {
      setInCartAlert(0);
      return;
    } else {
      return
    }
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
  useEffect(() => {
    isLoading(true);
    const productsCollection = collection(DB, "products");
    getDocs(productsCollection)
      .then((res) => {
        const products = res.docs.map((item) => {
          // Firestore method data()
          return {
            id: item.id,
            ...item.data(),
          };
        });
        setProductsHome(products);
      })
      .catch((error) => console.error(error))
      .finally(() => isLoading(false));
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
        inCartAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
export default AppContext;
