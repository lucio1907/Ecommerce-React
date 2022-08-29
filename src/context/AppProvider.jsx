import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [menuHide, setMenuHide] = useState(false);
  const [index, setIndex] = useState(1);
  const [item, setItem] = useState();
  const [spinner, setSpinner] = useState(false);
  const [idRoute, setIdRoute] = useState("");

  // Select id for navbar items
  const handleClickCategory = (e) => setIndex(e.target.id);
  return (
    <AppContext.Provider
      value={{
        menuHide,
        setMenuHide,
        handleClickCategory,
        index,
        item,
        setItem,
        spinner,
        setSpinner,
        idRoute,
        setIdRoute,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
export default AppContext;
