import React from "react";
import CatFilter from "./CatFilter";

const ItemCateg = ({ categorias }) => {
  return (
    <div className="col-3 d-flex flex-column" id="ItemCateg">
      {categorias.map((ele, id) => (
        <CatFilter category={ele} id={`cat${id++}`} />
      ))}
    </div>
  );
};

export default ItemCateg;
