import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListemContainer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings={"bienvenido"} />
    </div>
  );
}

export default App;
