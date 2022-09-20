import React from "react";
import { Link } from "react-router-dom";

function Item({ product, key, id }) {
  return (
    <div className="col-4" key={key} id={id}>
      <div>
        <img src={product.thumbnail} alt="" height="100rem" />
      </div>
      <div>
        <h3>{product.title}</h3>
      </div>
      <Link to={"/productos/" + product.id}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
}

export default Item;
