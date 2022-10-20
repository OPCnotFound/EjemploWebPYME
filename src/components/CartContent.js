import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../app/Provider";

const CartContent = ({ ordenCompra }) => {
  const [cartstate, setcartState] = useContext(AppContext);
  const [carrito, setcarrito] = useState([]);
  let cart = carrito;
  const test = () => {
    setcarrito(cartstate);
  };

  useEffect(() => {
    setcarrito(cartstate);
  }, [cartstate, carrito]);

  const borrarCarrito = () => {
    setcartState([]);
  };

  const borrarItem = (index) => {
    console.log(index);

    setcartState(() => {
      const temp = carrito;
      temp.splice(index, 1);
      return temp;
    });
    console.log(cartstate);
  };

  const subtotal = carrito.map((ele) => ele.price * ele.onCart);
  const initialValue = 0;
  const totalizador = subtotal.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  return (
    <div div id="CartPurchase">
      <button onClick={() => test()}>test</button>
      <button onClick={() => setcartState([])}>clean</button>

      <div className=" row align-items-center">
        <div className="col-4 panelLeft">
          <img
            src="https://www.conversioner.com/wp-content/uploads/2014/09/Depositphotos_9472457_s.jpg"
            alt="Imagen de Carrito"
            width="100%"
          />
        </div>

        <div className=" col-8 panelRigth" id="Detalle-compra">
          {carrito.map((ele, index) => (
            <div
              className="row itemContainer"
              key={ele.localid + "carItem"}
              id={ele.localid}
            >
              <div className="col-4 position-relative itemContainer__img">
                <img src={ele.thumbnail} alt="Imagen Producto" width="100%" />
                <button id="borrarItem" onClick={() => borrarItem(index)}>
                  <i className="bi bi-trash"></i>
                </button>
              </div>
              <div className=" d-flex flex-column col-8 ">
                <h2>{ele.title}</h2>

                <h3>Cantidad:{ele.onCart}</h3>
                <h4>Precio:{ele.price} USD</h4>
                <h3 className="align-self-end">
                  subTotal:{ele.onCart * ele.price}
                </h3>
              </div>
            </div>
          ))}

          <h1>TOTAL:{totalizador}</h1>
          <button
            id="Pagar"
            onClick={(eve) => ordenCompra({ eve, totalizador })}
          >
            PAGAR <i className="bi bi-wallet2"></i>
          </button>
        </div>
      </div>

      <button id="BorrarCarito" onClick={() => borrarCarrito()}>
        <i className="bi bi-trash"></i>
      </button>
    </div>
  );
};

export default CartContent;
