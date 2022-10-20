import { useContext, useState } from "react";
import { AppContext } from "../app/Provider";

function ItemCount({ stock, initial, onAdd, cart, agregados }) {
  const [cartstate, setcartState] = useContext(AppContext);

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
        <button className="anadir" onClick={() => subsCantidad()}>
          -
        </button>
        <span> {itemCantidad}</span>
        <button className="sustraer" onClick={() => addCantidad()}>
          +
        </button>
      </div>

      <button
        className="selectorCantidad__summit"
        onClick={() => {
          onAdd(itemCantidad);
          setcartState([...cart]);
          console.log(cart);
        }}
      >
        {agregados === 0 ? "Agregar a " : "Modificar"}{" "}
        <i className="bi bi-cart"></i>
      </button>
    </div>
  );
}

export default ItemCount;
