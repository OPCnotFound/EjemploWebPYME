import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [itemCantidad, setItemCantidad] = useState(parseInt(initial));

  const addCantidad = () => {
    if (itemCantidad < stock) {
      setItemCantidad(itemCantidad + 1);
    }
  };

  const subsCantidad = () => {
    if (itemCantidad > 1) {
      setItemCantidad(itemCantidad - 1);
    }
  };

  return (
    <div class="selectorCantidad">
      <span class="align-self-end">stock: {stock}</span>

      <div class="selectorCantidad__botonera">
        <button onClick={() => subsCantidad()}>-</button>
        <span> {itemCantidad}</span>
        <button onClick={() => addCantidad()}>+</button>
      </div>

      <div class="selectorCantidad__summit" onClick={() => onAdd(itemCantidad)}>
        <button class="btn btn-primary">
          Agregar a <i class="bi bi-cart"></i>
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
