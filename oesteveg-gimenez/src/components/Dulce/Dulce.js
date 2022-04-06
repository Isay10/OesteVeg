import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";

const Dulce = () => {
  const { type } = useParams();
  return <ItemListContainer type={type} />;
};

export default Dulce;
