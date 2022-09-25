import { useState } from "react";
import { Link } from "react-router-dom";

function CartWidget() {
  const [cartCounter, setCartCounter] = useState(0);

  return (
    <button className="nav-link">
      <Link to={"/cart"}>
        <i className="bi bi-cart"></i>
        <span>{cartCounter}</span>
      </Link>
    </button>
  );
}

export default CartWidget;
