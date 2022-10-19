import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../app/Provider";

const CartContent = ({ ordenCompra }) => {
  const [cartState, setcartState] = useContext(AppContext);
  const [carrito, setCarrito] = useState();
  const cart = cartState;

  useEffect(() => {
    setCarrito(cart);
  }, []);

  const borrarCarrito = () => {
    console.clear();
    setcartState([]);
  };

  const borrarItem = (index) => {
    console.log(cart[index]);
    cart.splice(index, 1);
    console.log(cart);
    setCarrito(cart);
  };

  const test = JSON.parse(
    `[{"id":4,"title":"OPPOF19","description":"OPPO F19 is officially announced on April 2021.","price":280,"discountPercentage":17.91,"rating":4.3,"stock":123,"brand":"OPPO","category":"smartphones","thumbnail":"https://dummyjson.com/image/i/products/4/thumbnail.jpg","images":["https://dummyjson.com/image/i/products/4/1.jpg","https://dummyjson.com/image/i/products/4/2.jpg","https://dummyjson.com/image/i/products/4/3.jpg","https://dummyjson.com/image/i/products/4/4.jpg","https://dummyjson.com/image/i/products/4/thumbnail.jpg"],"onCart":5},{"id":10,"title":"HP Pavilion 15-DK1056WM","description":"HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10","price":1099,"discountPercentage":6.18,"rating":4.43,"stock":89,"brand":"HP Pavilion","category":"laptops","thumbnail":"https://dummyjson.com/image/i/products/10/thumbnail.jpeg","images":["https://dummyjson.com/image/i/products/10/1.jpg","https://dummyjson.com/image/i/products/10/2.jpg","https://dummyjson.com/image/i/products/10/3.jpg","https://dummyjson.com/image/i/products/10/thumbnail.jpeg"],"onCart":1},{"id":7,"title":"Samsung Galaxy Book","description":"Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched","price":1499,"discountPercentage":4.15,"rating":4.25,"stock":50,"brand":"Samsung","category":"laptops","thumbnail":"https://dummyjson.com/image/i/products/7/thumbnail.jpg","images":["https://dummyjson.com/image/i/products/7/1.jpg","https://dummyjson.com/image/i/products/7/2.jpg","https://dummyjson.com/image/i/products/7/3.jpg","https://dummyjson.com/image/i/products/7/thumbnail.jpg"],"onCart":1},{"id":19,"title":"Skin Beauty Serum.","description":"Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m","price":46,"discountPercentage":10.68,"rating":4.42,"stock":54,"brand":"ROREC White Rice","category":"skincare","thumbnail":"https://dummyjson.com/image/i/products/19/thumbnail.jpg","images":["https://dummyjson.com/image/i/products/19/1.jpg","https://dummyjson.com/image/i/products/19/2.jpg","https://dummyjson.com/image/i/products/19/3.png","https://dummyjson.com/image/i/products/19/thumbnail.jpg"],"onCart":4}]`
  );

  const subtotal = cart.map((ele) => ele.price * ele.onCart);
  const initialValue = 0;
  const totalizador = subtotal.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  return (
    <div className="container row align-items-center" id="CartPurchase">
      <div className="col-4">
        <button onClick={() => setcartState(test)}>test</button>
        <img
          src="https://www.conversioner.com/wp-content/uploads/2014/09/Depositphotos_9472457_s.jpg"
          alt="Imagen de Carrito"
          width="100%"
        />
      </div>

      <div className=" col-8" id="Detalle-compra">
        {cart.map((ele, index) => (
          <div className="row">
            <div className="col-5">
              <img src={ele.thumbnail} alt="Imagen Producto" width="100%" />
            </div>
            <div className=" d-flex flex-column col-7">
              <button onClick={() => borrarItem(index)}>
                <i className="bi bi-trash"></i>
              </button>
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
        <button onClick={(eve) => ordenCompra({ eve, totalizador })}>
          PAGAR
        </button>
        <h2>TOTAL:{totalizador}</h2>
      </div>
      <button onClick={() => borrarCarrito()}>Limpiar Carrito</button>
    </div>
  );
};

export default CartContent;
