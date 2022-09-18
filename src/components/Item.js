import React from "react";

function Item({ product, i }) {
  return (
    <div key={i}>
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
