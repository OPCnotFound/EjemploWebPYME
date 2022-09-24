import React, { useEffect, useState } from "react";
import { listaCategorias } from "../components/Apis";

const TEST = () => {
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
    setcategorias(categorias);
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getCategorys();
  }, []);

  return (
    <div>
      <h2>TEST</h2>
      <button onClick={(e) => setcategorias(5)}>refresh</button>
      <p>{JSON.stringify(categorias)}</p>
    </div>
  );
};

export default TEST;
