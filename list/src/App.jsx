import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Eventos from "./pages/Evento";
import CriarEvento from "./pages/CriarEvento";
import Organizadores from "./pages/Organizadores";
import Ingressos from "./pages/Ingressos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evento" element={<Eventos />} />
        <Route path="/ingresso" element={<Ingressos />} />
        <Route path="/organizadores" element={<Organizadores />} />
        <Route path="/CriarEvento" element={<CriarEvento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
