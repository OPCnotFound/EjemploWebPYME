import React from "react";
import { getCat, printProd } from "./Apis";
import CatFilter from "./CatFilter";

const ItemCateg = () => {
  const lista = printProd();
  const listaCat = getCat(lista);
  listaCat.unshift("Todos");

  console.log(listaCat);

  return (
    <div>
      {listaCat.map((ele, id) => (
        <CatFilter category={ele} id={`cat${id}`} />
      ))}
    </div>
  );
};

export default ItemCateg;
