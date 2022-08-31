import NavBar from "./components/Header/NavBar";
import Inicio from "./pages/Inicio";
import ItemListContainer from "./components/Main/items/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppProvider";

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <NavBar />
        <Routes>
          <Route index element={<Inicio />} />
          <Route path="/category/:id" element={<ItemListContainer/>} />
          <Route path="/itemDetails/product/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
