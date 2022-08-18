import NavBar from "./components/Header/NavBar";
import Inicio from "./pages/Inicio";
import Remeras from "./pages/Remeras";
import Buzos from "./pages/Buzos";
import Zapatillas from "./pages/Zapatillas";
import UltimasNov from "./pages/UltimasNov";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {

  const [menuHide, setMenuHide] = useState(false);

  return (
    <BrowserRouter>
      <NavBar menuHide={menuHide}  setMenuHide={setMenuHide}/>
      <Routes>
        <Route index element={<Inicio menuHide={menuHide} />} />
        <Route path="/remeras" element={<Remeras />} />
        <Route path="/buzos" element={<Buzos />} />
        <Route path="/zapatillas" element={<Zapatillas />} />
        <Route path="/ultimasnovedades" element={<UltimasNov />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
