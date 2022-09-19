import React from "react";
import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  return (
    <div>
      <p>{product.title}</p>
      <div>
        <div>
          <img src="{product.images[1]}" alt="Imagen de muestra" />
        </div>
      </div>
      <ItemCount stock={product.stock} initial={1} onAdd />
    </div>
  );
}

export default ItemDetail;
