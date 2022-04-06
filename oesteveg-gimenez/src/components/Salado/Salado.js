import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";

const Salado = () => {
  const { type } = useParams();
  console.log("Azuca: " + JSON.stringify(type));
  return <ItemListContainer type={type} />;
};

export default Salado;
