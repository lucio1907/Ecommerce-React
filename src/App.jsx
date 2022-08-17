import NavBar from "./components/Header/NavBar";
import Inicio from "./pages/Inicio";
import Remeras from "./pages/Remeras";
import Buzos from "./pages/Buzos";
import Zapatillas from "./pages/Zapatillas";
import UltimasNov from "./pages/UltimasNov";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Inicio />} />
        <Route path="/remeras" element={<Remeras />} />
        <Route path="/buzos" element={<Buzos />} />
        <Route path="/zapatillas" element={<Zapatillas />} />
        <Route path="/ultimasnovedades" element={<UltimasNov />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
