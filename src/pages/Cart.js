import React from "react";
import CartContent from "../components/CartContent";
import { useContext } from "react";
import { AppContext } from "../app/Provider";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { createItem } from "../app/ApisOrdenes";
import { createItemCarrito } from "../app/ApisUsers";

const Cart = () => {
  const [cartState, setcartState, userLogstate, setUserLogstate] =
    useContext(AppContext);
  const [carritoVacioState, setCarritoVacioState] = useState(true);
  const carritoVacio = cartState.length === 0 ? true : false;

  useEffect(() => {
    setCarritoVacioState(carritoVacio);
  }, []);

  const ordenCompra = async ({ eve, totalizador }) => {
    console.log("click");
    const user = userLogstate;

    const ordenGenerada = {
      buyer: {
        name: user.name,
        phone: user.phone,
        email: user.email,
      },
      items: cartState,
      date: eve.timeStamp,
      total: totalizador,
    };

    await createItem(ordenGenerada).then((res) => console.log(res));
    await createItemCarrito(ordenGenerada, user.id).then((res) =>
      console.log(res)
    );
  };

  /* { buyer: { name, phone, email }, items: [{ id, title, price }], date, total */

  const sinItems = () => {
    return (
      <div className="d-flex flex-column align-items-center" id="CarritoVacio">
        <h2>Tu Carrito esta vacio</h2>
        <img
          alt="Imagen de un carrito vacío."
          src="https://editorialparalelo28.com/images/cartEmpty.png"
          height="550px"
        />
        <Link to={"/"}>Comenzar a Comprar?</Link>
      </div>
    );
  };
  console.log(carritoVacioState ? "vacio" : "lleno");

  return (
    <div>
      {carritoVacioState ? (
        sinItems()
      ) : (
        <CartContent ordenCompra={ordenCompra} />
      )}
    </div>
  );
};

export default Cart;
