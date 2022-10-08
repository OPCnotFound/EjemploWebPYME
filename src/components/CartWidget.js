import { useEffect } from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../app/Provider";

function CartWidget() {
  const [cartstate, setcartState, userLogstate, setUserLogstate] =
    useContext(AppContext);
  const [widgetNumber, setwidgetNumber] = useState(0);
  const cart = cartstate;
  const widgetIcon = cart.length;
  console.log(widgetNumber);
  console.log(widgetIcon);

  const uiContador = () => {
    return (
      <span
        className="d-flex justify-content-center align-items-center"
        id="uiContador"
      >
        {widgetIcon}
      </span>
    );
  };

  useEffect(() => {
    setwidgetNumber(widgetIcon);
    console.log("Widget Actualizado");
  }, []);

  const user =
    userLogstate === undefined ? "Iniciar Sesion?" : userLogstate.name + " ";

  return (
    <button className="nav-link " id="CartWidget">
      <Link className="d-flex align-items-center" to={"/cart"}>
        {user}
        <i className="bi bi-cart"></i>
      </Link>
      {widgetIcon === 0 ? "" : uiContador()}
    </button>
  );
}

export default CartWidget;
