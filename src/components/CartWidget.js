import { useState } from "react";

function CartWidget() {
  const [cartCounter, setCartCounter] = useState(0);

  return (
    <div>
      <button>
        <i className="bi bi-cart"></i>
      </button>

      <span>{cartCounter}</span>
    </div>
  );
}

export default CartWidget;
