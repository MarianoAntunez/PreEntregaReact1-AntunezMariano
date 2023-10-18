import React from "react";
import "./style.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="contenedor">
      <p className="greeting">{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
