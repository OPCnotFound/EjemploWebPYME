import React from "react";
import ItemDetail from "../components/ItemDetail";

function ItemDetailContainer({ p, cat }) {
  console.log(p[0]);

  return (
    <div class="my-2">
      <h2>Informacion Detallada del Producto</h2>
      <ItemDetail p={p[0]} cat={cat} />
    </div>
  );
}

export default ItemDetailContainer;
