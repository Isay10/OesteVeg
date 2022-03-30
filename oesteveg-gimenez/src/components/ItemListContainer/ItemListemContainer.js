import ItemList from "./ItemList";
import "./ItemlListContainer.css";

export default function ItemListContainer({ greetings }) {
  return (
    <>
      <p style={{ color: "red" }}>{greetings}</p>
      <div className="item-container">
        <ItemList />
      </div>
    </>
  );
}
