import { useEffect } from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../app/Provider";

function CartWidget() {
  const [cartstate, setcartState] = useContext(AppContext);

  const [widgetNumber, setwidgetNumber] = useState(0);
  const widgetIcon = cartstate.length;

  useEffect(() => {
    setwidgetNumber(widgetIcon);
    console.log("Widget Actualizado");
  }, [cartstate]);

  console.log(cartstate);

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
