import { NavLink } from "react-router-dom";

const CatFilter = ({ category, id }) => {
  return (
    <button id={id}>
      <NavLink to={`/category/${category}`}>{category}</NavLink>
    </button>
  );
};

export default CatFilter;
