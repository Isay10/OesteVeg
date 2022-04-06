import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemlListContainer.css";

export default function ItemListContainer({ type }) {
  return (
    <div className="item-container">
      <ItemList param={type} />
    </div>
  );
}
