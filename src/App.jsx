import NavBar from "./components/Header/NavBar";
import Inicio from "./pages/Inicio";
import ItemListContainer from "./components/Main/items/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppProvider";
import Cart from "./pages/Cart";
import Form from "./pages/Form";

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <NavBar />
        <Routes>
          <Route index element={<Inicio />} />
          <Route path="/category/:id" element={<ItemListContainer/>} />
          <Route path="/itemDetails/product/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/form" element={<Form />}/>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
