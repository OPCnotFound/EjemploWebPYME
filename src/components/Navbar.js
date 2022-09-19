import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

class linkNav {
  constructor(title, route, routeElement) {
    this.title = title;
    this.route = route;
    this.routeElement = routeElement;
  }
}

const linksNav = [
  new linkNav("Inicio", "/"),
  new linkNav("Productos", "/productos/todos"),
  new linkNav("Contacto", "/test"),
];

const NavBar = () => {
  return (
    <div>
      <ul className="nav">
        {linksNav.map((link, id) => (
          <li className="nav-link" key={`nav${id++}`}>
            <NavLink to={link.route} element={link.routeElement}>
              {link.title}
            </NavLink>
          </li>
        ))}
        <li className="nav-link">
          <CartWidget />
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
