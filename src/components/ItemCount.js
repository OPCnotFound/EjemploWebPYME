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
    <div className="selectorCantidad">
      <span className="align-self-end">stock: {stock}</span>

      <div className="selectorCantidad__botonera">
        <button onClick={() => subsCantidad()}>-</button>
        <span> {itemCantidad}</span>
        <button onClick={() => addCantidad()}>+</button>
      </div>

      <div
        className="selectorCantidad__summit"
        onClick={() => {
          onAdd(itemCantidad);
        }}
      >
        <button className="btn btn-primary">
          Agregar a <i className="bi bi-cart"></i>
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
