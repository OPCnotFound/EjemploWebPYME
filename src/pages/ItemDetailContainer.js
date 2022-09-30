import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import { getItemById, getItems } from "../app/Apis";

function ItemDetailContainer() {
  const customfilter = useParams().id;
  return (
    <div>
      <h3>Informacion Detallada del Producto</h3>
      <ItemDetail index={customfilter} />
    </div>
  );
}

export default ItemDetailContainer;
