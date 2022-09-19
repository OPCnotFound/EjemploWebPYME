import React from "react";
import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  return (
    <div>
      <p>{product.title}</p>
      <div>
        <div>
          <img src="" alt="Imagen de muestra" />
        </div>
      </div>
      <ItemCount stock={5} initial={1} onAdd />
    </div>
  );
}

export default ItemDetail;
