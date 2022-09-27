import React from "react";
import CartContent from "../components/CartContent";
import { useContext } from "react";
import { AppContext } from "../app/Provider";
import { useState } from "react";
import { useEffect } from "react";
import paginaVaciaSvg from "../media/empty-cart.svg";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartState, setcartState] = useContext(AppContext);
  const [carritoVacioState, setCarritoVacioState] = useState(true);
  const carritoVacio = cartState.length === 0 ? true : false;
  console.log(cartState);
  console.log(cartState.length);
  console.log(carritoVacio);
  useEffect(() => {
    setCarritoVacioState(carritoVacio);
  }, []);

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
  console.log(carritoVacio ? "vacio" : "lleno");

  return <div>{carritoVacio ? sinItems() : <CartContent />}</div>;
};

export default Cart;
