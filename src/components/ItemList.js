import React, { useEffect, useState } from "react";
import Item from "./Item";

function ItemList({ filter }) {
  const [pFiltered, setpFiltered] = useState([""]);
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

  const productosPorCategoria = () => {
    if (filter === undefined || filter === "Todos") {
      setpFiltered(productos);
    } else {
      const fil = productos.filter((ele) => ele.category === filter);
      setpFiltered(fil);
    }
  };

  useEffect(() => {
    productosPorCategoria();
  }, [filter]);

  return (
    <div className="col-10 row">
      {pFiltered.map((ele, id) => (
        <Item product={ele} key={`itemKey${ele.id}`} id={`item${id++}`} />
      ))}
    </div>
  );
}

export default ItemList;
