import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./components/Category/Category";
import Dulce from "./components/Dulce/Dulce";
import Home from "./components/Home/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos";
import Salado from "./components/Salado/Salado";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/category" element={<Category />} />
          <Route path="category/:type" element={<Dulce />} />
          <Route path="category/:type" element={<Salado />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
