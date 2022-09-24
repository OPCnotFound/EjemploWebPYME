import { useEffect, useState } from "react";
import { listaCategorias } from "../components/Apis";
import ItemCateg from "../components/ItemCateg";
import ItemList from "../components/ItemList";

function ItemListContainer({ filter }) {
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
    <div className=" container row " id="ItemListContainer">
      <ItemCateg categorias={categorias} />
      <ItemList filter={filter} />
    </div>
  );
}

export default ItemListContainer;
