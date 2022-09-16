import { useState } from "react";

function CartWidget() {
  const [cartCounter, setCartCounter] = useState(0);

  return (
    <div class="cartIcon">
      <button>
        <i class="bi bi-cart"></i>
      </button>

      <span class="cartIcon__counter">{cartCounter}</span>
    </div>
  );
}

export default CartWidget;
