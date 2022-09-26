import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import ItemDetail from "../components/ItemDetail";

function ItemDetailContainer() {
  const indexUrl = useParams().id - 1;
  const [productos, setproductos] = useState([""]);

  async function getProducts() {
    await fetch("https://dummyjson.com/products")
      .then((resp) => resp.json())
      .then((response) => response.products)
      .then((response) => setproductos(response));
  }

  useEffect(() => {
    getProducts();
    console.log("useEffect listado");
  }, [indexUrl]);

  const productoDet = productos[indexUrl];
  console.log("enviado" + productoDet);
  console.log(productoDet);

  return (
    <div>
      <h2>Informacion Detallada del Producto</h2>
      <ItemDetail index={indexUrl} productos={productoDet} />
    </div>
  );
}

export default ItemDetailContainer;
