import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Button } from "@mui/material";
import "./CartWidget.css";
export default function CartWidget({ quantity }) {
  return (
    <Button variant="text">
      <LocalGroceryStoreIcon style={{ color: "black" }} />{" "}
      <div className="quantity-container">
        <span className="quantity-number">{quantity}</span>
      </div>
    </Button>
  );
}
