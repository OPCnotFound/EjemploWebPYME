import { useState } from "react";

function CartWidget() {
  const [cartCounter, setCartCounter] = useState(0);

  return (
    <button className="nav-link">
      <i className="bi bi-cart"></i>
      <span>{cartCounter}</span>
    </button>
  );
}

export default CartWidget;
