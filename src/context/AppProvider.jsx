import { createContext, useEffect, useState } from "react";
import { products } from "../mocks/products"

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [menuHide, setMenuHide] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [productsHome, setProductsHome] = useState([]);

  const handleClickMenu = () => {
    setMenuHide(!menuHide);
  };

  // Promise for home's products
  const getProductsHome = () => new Promise((resolve, reject) => {
    resolve(products);
  })

  useEffect(() => {
    getProductsHome()
      .then(prod => setProductsHome(prod));
  }, [])
  
  // Get products smaller than 6(number of id)
  const productsHomeFilter = productsHome.filter(prodsHome => prodsHome.price > 400 && prodsHome.price <= 1000 && prodsHome.stock > 1)

  return (
    <AppContext.Provider
      value={{
        menuHide,
        handleClickMenu,
        spinner,
        setSpinner,
        productsHomeFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
export default AppContext;
