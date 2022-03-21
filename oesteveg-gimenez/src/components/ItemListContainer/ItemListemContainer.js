import ItemCount from "./ItemCount";
import "./ItemlListContainer.css";

export default function ItemListContainer({ greetings }) {
  const onAdd = (qty) => {
    alert(
      `Se han agregado ${qty} ${qty > 1 ? "productos" : "producto"} al carrito`
    );
  };

  return (
    <>
      <p style={{ color: "red" }}>{greetings}</p>
      <div className="item-container">
        <ItemCount
          initial={0}
          stock={40}
          onAdd={onAdd}
          product={"Milanesa de seitan"}
        />
        <ItemCount
          initial={0}
          stock={0}
          onAdd={onAdd}
          product={"Medallones rellenos"}
        />
        <ItemCount
          initial={0}
          stock={10}
          onAdd={onAdd}
          product={"Pechuga de tofu"}
        />
      </div>
    </>
  );
}
