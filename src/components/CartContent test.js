import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../app/Provider";

const CartContent = () => {
  const [cartState, setcartState] = useContext(AppContext);

  const [carritoState, setcarritoState] = useState();

  const carritoGloblal = cartState;
  const carritoLocal = carritoState;

  useEffect(() => {
    setcarritoState(carritoGloblal);
  }, []);

  useEffect(() => {
    setcartState(setcartState);
  }, []);

  const test = JSON.parse(
    `[{"id":4,"title":"OPPOF19","description":"OPPO F19 is officially announced on April 2021.","price":280,"discountPercentage":17.91,"rating":4.3,"stock":123,"brand":"OPPO","category":"smartphones","thumbnail":"https://dummyjson.com/image/i/products/4/thumbnail.jpg","images":["https://dummyjson.com/image/i/products/4/1.jpg","https://dummyjson.com/image/i/products/4/2.jpg","https://dummyjson.com/image/i/products/4/3.jpg","https://dummyjson.com/image/i/products/4/4.jpg","https://dummyjson.com/image/i/products/4/thumbnail.jpg"],"onCart":5},{"id":10,"title":"HP Pavilion 15-DK1056WM","description":"HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10","price":1099,"discountPercentage":6.18,"rating":4.43,"stock":89,"brand":"HP Pavilion","category":"laptops","thumbnail":"https://dummyjson.com/image/i/products/10/thumbnail.jpeg","images":["https://dummyjson.com/image/i/products/10/1.jpg","https://dummyjson.com/image/i/products/10/2.jpg","https://dummyjson.com/image/i/products/10/3.jpg","https://dummyjson.com/image/i/products/10/thumbnail.jpeg"],"onCart":1},{"id":7,"title":"Samsung Galaxy Book","description":"Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched","price":1499,"discountPercentage":4.15,"rating":4.25,"stock":50,"brand":"Samsung","category":"laptops","thumbnail":"https://dummyjson.com/image/i/products/7/thumbnail.jpg","images":["https://dummyjson.com/image/i/products/7/1.jpg","https://dummyjson.com/image/i/products/7/2.jpg","https://dummyjson.com/image/i/products/7/3.jpg","https://dummyjson.com/image/i/products/7/thumbnail.jpg"],"onCart":1},{"id":19,"title":"Skin Beauty Serum.","description":"Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m","price":46,"discountPercentage":10.68,"rating":4.42,"stock":54,"brand":"ROREC White Rice","category":"skincare","thumbnail":"https://dummyjson.com/image/i/products/19/thumbnail.jpg","images":["https://dummyjson.com/image/i/products/19/1.jpg","https://dummyjson.com/image/i/products/19/2.jpg","https://dummyjson.com/image/i/products/19/3.png","https://dummyjson.com/image/i/products/19/thumbnail.jpg"],"onCart":4}]`
  );

  console.log(carritoLocal);
  console.log(carritoGloblal);

  const quitarItem = () => {
    carritoLocal.shift();
    console.log(carritoLocal);
    setcarritoState(carritoLocal);
  };

  return (
    <div>
      <button onClick={() => setcartState(test)}>test</button>
      <button onClick={() => setcartState([])}>Limpiar Carrito</button>
      <button onClick={() => quitarItem()}>quitar item</button>
    </div>
  );
};

export default CartContent;
