import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  const [agregar, setagregar] = useState(0);

  const onAdd = (itemCantidad) => {
    product.stock <= agregar + itemCantidad
      ? setagregar(product.stock)
      : setagregar(agregar + itemCantidad);
  };

  return (
    <div>
      <p>{product.title}</p>
      {agregar !== 0 ? <span> {agregar} Items en Carrito </span> : ""}
      <div>
        <div>
          <img src="{product.images[1]}" alt="Imagen de muestra" />
        </div>
      </div>
      <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
      {agregar !== 0 ? <Link to={"/cart"}>Terminar compra?</Link> : ""}
    </div>
  );
}

export default ItemDetail;
