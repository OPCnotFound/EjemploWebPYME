import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems, getItemsByCondition } from "../app/Apis";
import ItemCateg from "../components/ItemCateg";
import ItemList from "../components/ItemList";

function ItemListContainer() {
  const [productosState, setproductosState] = useState([""]);
  const customfilter = useParams().category;
  const productos = productosState;
  const categorias = [
    "Todos",
    "smartphones",
    "home-decoration",
    "fragrances",
    "skincare",
    "groceries",
    "laptops",
  ];

  const obtenerProductos = async () => {
    if (customfilter === "Todos" || customfilter === undefined) {
      await getItems().then((res) => setproductosState(res));
    } else {
      await getItemsByCondition(customfilter, "category").then((res) =>
        setproductosState(res)
      );
    }
  };

  useEffect(() => {
    obtenerProductos();
    console.log(productosState);
  }, []);

  /*   const listacategorias = listaCategorias(productos);
  listacategorias.unshift("Todos");
 */
  return (
    <div id="ItemListContainer">
      <ItemCateg categorias={categorias} />

      <ItemList productos={productos} filter={customfilter} />
    </div>
  );
}

export default ItemListContainer;
