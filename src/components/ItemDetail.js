import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../app/Provider";
import ItemCount from "./ItemCount";
import { useContext } from "react";

function ItemDetail({ product }) {
  const [agregar, setagregar] = useState(0);
  const [cartstate, setcartState] = useContext(AppContext);

  const borrarCarrito = () => {
    console.clear();
    setagregar(0);
    setcartState([]);
  };

  const addItem = () => {
    if (agregar !== 0) {
      const cartItem = { ...product, onCart: agregar }; //asignar cantidad de productos a agregar

      const cart = cartstate;

      const existe = cartstate.indexOf(
        cartstate.find(({ id }) => id === product.id)
      );

      //Verificar si item ya ha sido agregado

      if (existe === -1) {
        cart.push(cartItem);
        //crear el nuevo carrito
      } else {
        cart[existe] = cartItem;
        //actualizar el item en el carrito
      }

      setcartState(cart); // setear el nuevo carrito
    }
  };

  const delItem = () => {
    const cartItem = { ...product, onCart: agregar }; //asignar cantidad de productos a agregar

    const cart = cartstate;

    const existe = cartstate.indexOf(
      cartstate.find(({ id }) => id === cartItem.id)
    );

    if (existe !== -1) {
      cart.splice(existe, 1);
      //descatear del nuevo carrito
    }
    setcartState(cart);
    console.log(cartstate);
  };

  const onAdd = (itemCantidad) => {
    setagregar(itemCantidad);
  };

  addItem();

  console.log(cartstate);

  return (
    <div>
      <p>{product.title}</p>
      {agregar !== 0 ? <span> {agregar} Items en Carrito </span> : ""}
      <div>
        <div>
          <img src="{product.images[1]}" alt="Imagen de muestra" />
        </div>
      </div>
      <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
      {agregar !== 0 ? <Link to={"/cart"}>Terminar compra?</Link> : ""}
      <button onClick={() => borrarCarrito()}>LOS NO</button>
      <button onClick={() => delItem()}>Borrar Item</button>
    </div>
  );
}

export default ItemDetail;
