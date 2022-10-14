import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

class linkNav {
  constructor(title, route, routeElement) {
    this.title = title;
    this.route = route;
    this.routeElement = routeElement;
  }
}

const linksNav = [
  new linkNav("Inicio", ""),
  new linkNav("Productos", "/products"),
  new linkNav("Contacto", "/test"),
];

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light d-flex" id="NavBar">
      <div className="logoContainer">
        <Link to="/">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/store-logo-design-template-3ac57f780d1cae2a6d3a049f82c62437_screen.jpg?ts=1646205211"
            alt="LOGO"
          />
        </Link>
      </div>

      <button
        className="navbar-toggler  "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i className="icon bi bi-list"></i>
        </span>
      </button>

      <div
        className="collapse navbar-collapse  align-items-center justify-content-end "
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav align-items-center ">
          {linksNav.map((link) => (
            <li className="nav-item" key={link.route}>
              <Link className="nav-link" to={link.route}>
                {link.title}
              </Link>
            </li>
          ))}
          <li className="nav-item">
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
