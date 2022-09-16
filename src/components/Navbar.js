import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/page2/">Page2</NavLink>
        </li>
        <li>
          <NavLink to="/ajksdfkjhasdk">Error en la url</NavLink>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};
export default NavBar;
