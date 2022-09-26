import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listaCategorias } from "../components/Apis";
import ItemCateg from "../components/ItemCateg";
import ItemList from "../components/ItemList";

function ItemListContainer() {
  const customfilter = useParams().category;
  const filter = customfilter;

  const [productos, setproductos] = useState([""]);

  async function getProducts() {
    await fetch("https://dummyjson.com/products")
      .then((resp) => resp.json())
      .then((response) => response.products)
      .then((response) => setproductos(response));
  }

  useEffect(() => {
    getProducts();
    return setproductos([]);
  }, []);

  const listacategorias = listaCategorias(productos);
  listacategorias.unshift("Todos");

  return (
    <div className=" container row " id="ItemListContainer">
      <ItemCateg categorias={listacategorias} />
      <ItemList productos1={productos} filter={filter} />
    </div>
  );
}

export default ItemListContainer;
