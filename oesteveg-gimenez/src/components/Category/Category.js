import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Category() {
  return (
    <>
      <h1>Categorias</h1>
      <div>
        <Link to={`/category/dulce`}>
          <Button variant="text">Dulce</Button>
        </Link>{" "}
      </div>
      <div>
        {" "}
        <Link to={`/category/salado`}>
          <Button variant="text">Salado</Button>
        </Link>
      </div>
    </>
  );
}
