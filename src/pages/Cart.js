import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../app/Provider";

const Cart = () => {
  const [cartstate, setcartState] = useContext(AppContext);
  console.log(cartstate);

  const subtotal = cartstate.map((ele) => ele.price * ele.onCart);

  const initialValue = 0;
  const totalizador = subtotal.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  const borrarCarrito = () => {
    console.clear();
    setcartState([]);
  };
  {
    /* <div>
  <img src="" alt="Imagen" />
  <Link to={"/productos"}>Comienza Ahora!</Link>
</div>; */
  }
  return (
    <div className="container row " id="CartPurchase">
      <div className="col-4">
        <img
          src="https://www.conversioner.com/wp-content/uploads/2014/09/Depositphotos_9472457_s.jpg"
          alt="Imagen de Carrito"
          width="100%"
        />
      </div>

      <div className=" col-8" id="Detalle-compra">
        {cartstate.map((ele) => (
          <div className="row">
            <div className="col-5">
              <img src={ele.thumbnail} alt="Imagen Producto" width="100%" />
            </div>
            <div className=" d-flex flex-column col-7">
              <h4>{ele.title}</h4>
              <h6>Cantidad:{ele.onCart}</h6>
              <h5>Precio:{ele.price}</h5>
              <h5 className="align-self-end">
                subTotal:{ele.onCart * ele.price}
              </h5>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between">
        <button>PAGAR</button>
        <h2>TOTAL:{totalizador}</h2>
      </div>
      <button onClick={() => borrarCarrito()}>Limpiar Carrito</button>
    </div>
  );
};

export default Cart;
