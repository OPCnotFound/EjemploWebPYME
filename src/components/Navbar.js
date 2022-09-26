import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

class linkNav {
  constructor(title, route, routeElement) {
    this.title = title;
    this.route = route;
    this.routeElement = routeElement;
  }
}

const linksNav = [
  new linkNav("Inicio", "/"),
  new linkNav("Productos", "/products"),
  new linkNav("Contacto", "/test"),
];

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-light d-flex">
      <div class="container-fluid">
        <Link to="/">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/store-logo-design-template-3ac57f780d1cae2a6d3a049f82c62437_screen.jpg?ts=1646205211"
            alt="LOGO"
            height={"200px"}
          />
        </Link>

        <button
          className="navbar-toggler  "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse  justify-content-end "
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            {linksNav.map((link, id) => (
              <li className="nav-item" key={`nav${id++}`}>
                <NavLink className="nav-link" to={link.route}>
                  {link.title}
                </NavLink>
              </li>
            ))}
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
