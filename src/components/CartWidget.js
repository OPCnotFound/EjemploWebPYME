import { useEffect } from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../app/Provider";

function CartWidget() {
  const [cartstate, setcartState] = useContext(AppContext);

  const [widgetNumber, setwidgetNumber] = useState(0);
  const widgetIcon = widgetNumber;
  const cantidadOnCart = cartstate.length;

  console.log(cantidadOnCart);
  console.log(widgetIcon);
  const actualizar = cartstate.length;
  console.log(actualizar);

  useEffect(() => {
    setwidgetNumber(actualizar);
    console.log("Widget Actualizado");
  });

  return (
    <button className="nav-link" id="CartWidget">
      <Link to={"/cart"}>
        <i className="bi bi-cart"></i>
      </Link>
      <span>{widgetIcon}</span>
    </button>
  );
}

export default CartWidget;
