import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [menuHide, setMenuHide] = useState(false);

  const handleClickMenu = () => {
    setMenuHide(!menuHide);
  };

  return (
    <AppContext.Provider
      value={{
        menuHide,
        handleClickMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
export default AppContext;
