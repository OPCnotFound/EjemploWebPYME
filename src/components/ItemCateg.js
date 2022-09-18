import React from "react";
import { getCat, printProd } from "./Apis";
import CatFilter from "./CatFilter";

const ItemCateg = ({ cat }) => {
  return (
    <div>
      {cat.map((ele, id) => (
        <CatFilter category={ele} id={`cat${id}`} />
      ))}
    </div>
  );
};

export default ItemCateg;
