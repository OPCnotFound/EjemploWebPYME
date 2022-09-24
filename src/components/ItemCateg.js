import React, { useEffect, useState } from "react";
import { listaCategorias } from "../components/Apis";

import CatFilter from "./CatFilter";

const ItemCateg = () => {
  const [productos, setproductos] = useState([""]);
  const [categorias, setcategorias] = useState([""]);

  async function getProducts() {
    await fetch("https://dummyjson.com/products")
      .then((resp) => resp.json())
      .then((response) => response.products)
      .then((response) => setproductos(response));
  }

  function getCategorys() {
    const categorias = listaCategorias(productos);
    categorias.unshift("Todos");
    setcategorias(categorias);
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getCategorys();
  }, []);

  console.log(categorias);
  return (
    <div className="col-3 d-flex flex-column" id="ItemCateg">
      {categorias.map((ele, id) => (
        <CatFilter category={ele} id={`cat${id}`} />
      ))}
    </div>
  );
};

export default ItemCateg;
