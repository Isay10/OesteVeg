import ItemList from "../ItemList/ItemList";
import "./ItemlListContainer.css";

export default function ItemListContainer({ greetings }) {
  return (
    <div className="item-container">
      <ItemList />
    </div>
  );
}
