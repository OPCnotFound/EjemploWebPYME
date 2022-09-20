import React from "react";
import { getCat, printProd } from "./Apis";
import CatFilter from "./CatFilter";

const ItemCateg = ({ p, cat }) => {
  return (
    <div className="col-2 d-flex flex-column" id="ItemCateg">
      {cat.map((ele, id) => (
        <CatFilter category={ele} id={`cat${id}`} />
      ))}
    </div>
  );
};

export default ItemCateg;
