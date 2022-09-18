import { NavLink } from "react-router-dom";

const CatFilter = ({ category, id }) => {
  return (
    <button id={id}>
      <NavLink to={`/productos/${category}`}>{category}</NavLink>
    </button>
  );
};

export default CatFilter;
