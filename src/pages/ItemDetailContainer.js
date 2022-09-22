import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";

function ItemDetailContainer({ plist }) {
  const prodID = parseInt(useParams().id);
  const index = plist.map((ele) => ele.id).indexOf(prodID);

  const [product, setproduct] = useState({});

  useEffect(() => {
    setproduct(plist[index]);
  }, []);

  return (
    <div>
      <h2>Informacion Detallada del Producto</h2>
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;
