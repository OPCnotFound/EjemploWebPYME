import React from "react";
import { NavLink } from "react-router-dom";

const CatFilter = ({ category, id }) => {
  return (
    <button id={id}>
      <NavLink to={"/"} element={"<Home/>"}>
        {category}
      </NavLink>
    </button>
  );
};

export default CatFilter;
