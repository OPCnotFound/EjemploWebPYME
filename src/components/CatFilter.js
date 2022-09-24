import { NavLink } from "react-router-dom";

const CatFilter = ({ category, id }) => {
  return (
    <button key={id} id={id}>
      <NavLink to={`/productos/${category}`}>{category}</NavLink>
    </button>
  );
};

export default CatFilter;
