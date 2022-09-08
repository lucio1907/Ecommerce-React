import { createContext, useEffect, useState } from "react";
import { products } from "../mocks/products"

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [productsHome, setProductsHome] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);


  const onAddCart = (item, quantity) => {
    // List products in the cart
    setCartProducts([...cartProducts, {...item, quantity}]);
  }

  const emptyCart = () => {
    setCartProducts([]);
  }

  const isLoading = (param) => {
    setLoading(param);
  }

   // Promise for home's products
   const getProductsHome = () => new Promise((resolve, reject) => {
    resolve(products);
  })

  // localStorage.setItem('cart', JSON.stringify(cartProducts))

  useEffect(() => {
    getProductsHome()
      .then(prod => setProductsHome(prod));
  }, [])
  
  // Get products smaller than 6(number of id)
  const productsHomeFilter = productsHome.filter(prodsHome => prodsHome.price > 400 && prodsHome.price <= 1000 && prodsHome.stock > 1)


  return (
    <AppContext.Provider
      value={{
        loading,
        isLoading,
        productsHomeFilter,
        onAddCart,
        cartProducts,
        emptyCart
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
export default AppContext;
