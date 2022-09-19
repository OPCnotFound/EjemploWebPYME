import React from "react";
import ItemCount from "./ItemCount";

function ItemDetail({ p, cat }) {
  console.log(p);
  return (
    <div>
      <p>{p.descripcion}</p>
      <div>
        <div>
          <img
            src={p.images[0]}
            class="d-block w-100"
            alt="Imagen de muestra"
          />
        </div>
      </div>
      <ItemCount stock={p.stock} initial={1} onAdd />
    </div>
  );
}

export default ItemDetail;
