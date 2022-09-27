import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../app/Provider";
import ItemCount from "./ItemCount";
import { useContext } from "react";

function ItemDetail({ productos }) {
  const [agregar, setagregar] = useState(0);
  const [cartstate, setcartState] = useContext(AppContext);

  const [producto, setproducto] = useState();
  const productoDet = !productos ? { test: "asd" } : productos;

  console.log("recibido" + productos);
  console.log(producto);

  useEffect(() => {
    setproducto(productoDet);
  }, [productos]);

  const borrarCarrito = () => {
    console.clear();
    setagregar(0);
    setcartState([]);
  };

  const addItem = () => {
    if (agregar !== 0) {
      const cartItem = { ...producto, onCart: agregar }; //asignar cantidad de productoos a agregar

      const cart = cartstate;

      const existe = cartstate.indexOf(
        cartstate.find(({ id }) => id === producto.id)
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
    const cartItem = { ...producto, onCart: agregar }; //asignar cantidad de productoos a agregar

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

  return (
    <div>
      <h2>{producto.title}</h2>
      {/*       <div>
        <img src="https://dummyjson.com/image/i/products/3/1.jpg" alt="" />
      </div>
 */}
      {"SI COLOCO IMAGENES SE QUIEBRA LA APP "}*
      {agregar !== 0 ? <span> {agregar} Items en Carrito </span> : ""}
      <div></div>
      <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
      <h4>{producto.price}$</h4>
      {agregar !== 0 ? <Link to={"/cart"}>Terminar compra?</Link> : ""}
      <button onClick={() => borrarCarrito()}>LOS NO</button>
      <button onClick={() => delItem()}>Borrar Item</button>
    </div>
  );
}

export default ItemDetail;
