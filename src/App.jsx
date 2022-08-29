import NavBar from "./components/Header/NavBar";
import Inicio from "./pages/Inicio";
import Remeras from "./pages/Remeras";
import Buzos from "./pages/Buzos";
import Zapatillas from "./pages/Zapatillas";
import UltimasNov from "./pages/UltimasNov";
import ModalItemDetail from "./pages/ModalItemDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppProvider";

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <NavBar />
        <Routes>
          <Route index element={<Inicio />} />
          <Route path="/category/:id" element={<Remeras />} />
          <Route path="/category/:id" element={<Buzos />} />
          <Route path="/category/:id" element={<Zapatillas />} />
          <Route path="/category/:id" element={<UltimasNov />} />
          <Route path="/itemDetails/product/:itemId" element={<ModalItemDetail />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
