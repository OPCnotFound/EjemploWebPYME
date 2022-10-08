import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../app/Provider";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { getItemById } from "../app/Apis";

function ItemDetail({ index }) {
  const [cartstate, setcartState] = useContext(AppContext);
  const [prodDet, setProdDet] = useState();
  const [agregados, setAgregados] = useState(0);
  const cantidadAgregada = agregados;

  const obtenerProductos = async () => {
    await getItemById(index).then((res) => setProdDet(res));
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const proDetallada = { ...prodDet, onCart: agregados };
  console.log(proDetallada);
  const listaImagenes = !proDetallada.images ? [] : proDetallada.images;

  const addToCart = () => {
    console.log("add");
    const cart = cartstate;

    const cartItemIndex = cartstate.indexOf(
      cartstate.find(({ id }) => id === proDetallada.id)
    ); //Verificar indice de product a agregar en cartState // -1 no ha sido agregado

    cartItemIndex === -1
      ? cart.push(proDetallada) /*//crear el item en el CART */
      : (cart[cartItemIndex] =
          proDetallada); /* //actualizar el item en el carrito */

    setcartState(cart);
    console.log(cartstate);
  };

  const deleteFromCart = () => {
    const cart = cartstate;
    const cartItemIndex = cartstate.indexOf(
      cartstate.find(({ id }) => id === proDetallada.id)
    );

    if (cartItemIndex !== -1) {
      cart.splice(cartItemIndex, 1);
      console.log("delete");
      console.log(cartstate);
    } /* //actualizar el item en el carrito */

    setcartState(cart);
  };

  const onAdd = (itemCantidad) => {
    setAgregados(itemCantidad);
  };

  useEffect(() => {
    agregados !== 0 ? addToCart() : deleteFromCart();
  }, [agregados]);

  const borrarCarrito = () => {
    console.clear();
    setcartState([]);
  };
  const test = JSON.parse(
    `[{"id":4,"title":"OPPOF19","description":"OPPO F19 is officially announced on April 2021.","price":280,"discountPercentage":17.91,"rating":4.3,"stock":123,"brand":"OPPO","category":"smartphones","thumbnail":"https://dummyjson.com/image/i/products/4/thumbnail.jpg","images":["https://dummyjson.com/image/i/products/4/1.jpg","https://dummyjson.com/image/i/products/4/2.jpg","https://dummyjson.com/image/i/products/4/3.jpg","https://dummyjson.com/image/i/products/4/4.jpg","https://dummyjson.com/image/i/products/4/thumbnail.jpg"],"onCart":5},{"id":10,"title":"HP Pavilion 15-DK1056WM","description":"HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10","price":1099,"discountPercentage":6.18,"rating":4.43,"stock":89,"brand":"HP Pavilion","category":"laptops","thumbnail":"https://dummyjson.com/image/i/products/10/thumbnail.jpeg","images":["https://dummyjson.com/image/i/products/10/1.jpg","https://dummyjson.com/image/i/products/10/2.jpg","https://dummyjson.com/image/i/products/10/3.jpg","https://dummyjson.com/image/i/products/10/thumbnail.jpeg"],"onCart":1},{"id":7,"title":"Samsung Galaxy Book","description":"Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched","price":1499,"discountPercentage":4.15,"rating":4.25,"stock":50,"brand":"Samsung","category":"laptops","thumbnail":"https://dummyjson.com/image/i/products/7/thumbnail.jpg","images":["https://dummyjson.com/image/i/products/7/1.jpg","https://dummyjson.com/image/i/products/7/2.jpg","https://dummyjson.com/image/i/products/7/3.jpg","https://dummyjson.com/image/i/products/7/thumbnail.jpg"],"onCart":1},{"id":19,"title":"Skin Beauty Serum.","description":"Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m","price":46,"discountPercentage":10.68,"rating":4.42,"stock":54,"brand":"ROREC White Rice","category":"skincare","thumbnail":"https://dummyjson.com/image/i/products/19/thumbnail.jpg","images":["https://dummyjson.com/image/i/products/19/1.jpg","https://dummyjson.com/image/i/products/19/2.jpg","https://dummyjson.com/image/i/products/19/3.png","https://dummyjson.com/image/i/products/19/thumbnail.jpg"],"onCart":4}]`
  );

  return (
    <div className="d-flex flex-column">
      <h2>{proDetallada.title}</h2>{" "}
      <img src={listaImagenes[0]} alt="" height="350px" />
      {cantidadAgregada !== 0 ? (
        <button onClick={() => setAgregados(0)}>
          <i className="bi bi-trash">{cantidadAgregada} Items en Carrito</i>
        </button>
      ) : (
        ""
      )}
      <h3>{proDetallada.price} CLP</h3>
      <ItemCount
        stock={proDetallada.stock}
        initial={1}
        onAdd={onAdd}
        addToCart={addToCart}
      />
      {agregados !== 0 ? <Link to={"/cart"}>Terminar compra?</Link> : ""}
      <button onClick={() => setcartState(test)}>test</button>
      <button onClick={() => borrarCarrito()}>Limpiar Carrito</button>
    </div>
  );
}

export default ItemDetail;
