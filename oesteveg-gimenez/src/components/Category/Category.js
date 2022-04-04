import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Category({ type }) {
  return (
    <>
      <h1>Categorias</h1>
      <div>
        <Link to={`/category/${type[0]}`}>
          <Button variant="text">Dulce</Button>
        </Link>{" "}
      </div>
      <div>
        {" "}
        <Link to={`/category/${type[1]}`}>
          <Button variant="text">Salado</Button>
        </Link>
      </div>
    </>
  );
}
