import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import ItemDetail from "../components/ItemDetail";

function ItemDetailContainer() {
  const customfilter = useParams().id - 1;

  const [productos, setproductos] = useState([""]);

  async function getProducts() {
    await fetch("https://dummyjson.com/products")
      .then((resp) => resp.json())
      .then((response) => response.products)
      .then((response) => setproductos(response));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h2>Informacion Detallada del Producto</h2>
      <ItemDetail index={customfilter} productos={productos} />
    </div>
  );
}

export default ItemDetailContainer;
