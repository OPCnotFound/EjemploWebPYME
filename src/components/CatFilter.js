import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { printProd } from "./Apis";
import ItemList from "./ItemList";

const CatFilter = ({ category, id }) => {
  const [p, setp] = useState([]);

  useEffect(() => {
    setp(printProd());
  }, []);

  return (
    <button id={id}>
      <NavLink
        to={`/productos/${category}`}
        element={`${(
          <ItemList p={p.filter((ele) => ele.category == "laptops")} />
        )}`}
      >
        {category}
      </NavLink>
    </button>
  );
};

export default CatFilter;
