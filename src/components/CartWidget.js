import { useEffect } from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../app/Provider";

function CartWidget() {
  const [cartstate, setcartState, userLogstate, setUserLogstate] =
    useContext(AppContext);
  const widgetCount = cartstate.length;

  useEffect(() => {
    console.log("icon displays " + widgetCount);
  }, []);

  const uiContador = () => {
    return (
      <span
        className="d-flex justify-content-center align-items-center"
        id="uiContador"
      >
        {widgetCount}
      </span>
    );
  };

  const user =
    userLogstate === undefined ? "Iniciar Sesion?" : userLogstate.name + " ";

  return (
    <button className="nav-link " id="CartWidget">
      <Link className="d-flex align-items-center" to={"/cart"}>
        {user}
        <i className="bi bi-cart"></i>
      </Link>
      {widgetCount === 0 ? "" : uiContador()}
    </button>
  );
}

export default CartWidget;
