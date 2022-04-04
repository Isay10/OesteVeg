import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos";
import Category from "./components/Category/Category";
import Dulce from "./components/Dulce/Dulce";
import Salado from "./components/Salado/Salado";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route
            path="/category"
            element={<Category type={["dulce", "salado"]} />}
          />
          <Route path="category/dulce" element={<Dulce />} />
          <Route path="category/salado" element={<Salado />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
