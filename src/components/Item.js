import React from "react";

function Item({ product, key, id }) {
  return (
    <div key={key} id={id}>
      <div>
        <img src={product.images[0]} alt="" />
      </div>
      <div>
        <h3>{product.title}</h3>
      </div>

      <button>Ver detalle</button>
    </div>
  );
}

export default Item;
