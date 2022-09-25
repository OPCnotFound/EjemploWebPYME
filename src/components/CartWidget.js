import { useEffect } from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../app/Provider";

function CartWidget() {
  const [cartstate, setcartState] = useContext(AppContext);

  const [widgetNumber, setwidgetNumber] = useState(0);

  const actNumber = () => {
    const actualizar = cartstate.length;
    setwidgetNumber(actualizar);
    console.log(actualizar);
  };

  useEffect(() => {
    actNumber();
  }, [cartstate]);

  return (
    <button className="nav-link">
      <Link to={"/cart"}>
        <i className="bi bi-cart"></i>
        <span>{widgetNumber}</span>
      </Link>
    </button>
  );
}

export default CartWidget;
