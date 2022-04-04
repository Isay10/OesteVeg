import ItemList from "../ItemList/ItemList";
import "./ItemlListContainer.css";

export default function ItemListContainer({ type }) {
  return (
    <div className="item-container">
      <ItemList type={type} />
    </div>
  );
}
