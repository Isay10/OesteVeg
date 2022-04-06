import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const { id } = useParams();
  return (
    <>
      <div className="item-container">
        <ItemDetail param={id} />
      </div>
    </>
  );
}
