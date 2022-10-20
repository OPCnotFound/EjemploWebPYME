import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../app/Provider";
import ItemCount from "../components/ItemCount";
import { useContext } from "react";
import { getItemById } from "../app/Apis";
import CarouselFadeExample from "../components/Carousel";
import CartContent from "../components/CartContent";

function ItemDetail({ index = "7g8nZcgxRk6jjq5lHZFA" }) {
  const [cartstate, setcartState] = useContext(AppContext);
  const [prodDet, setProdDet] = useState();
  const [agregados, setAgregados] = useState(0);

  const cart = cartstate;
  console.log(cart);

  const obtenerProductos = async () => {
    await getItemById(index).then((res) => setProdDet(res));
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const onAdd = (itemCantidad) => {
    setAgregados(itemCantidad);
  };

  const proDetallada = { ...prodDet, onCart: agregados };
  console.log(proDetallada.onCart);

  const listaImagenes = !proDetallada.images ? [] : proDetallada.images;

  if (agregados !== 0) {
    cart.push(proDetallada);
  }
  return (
    <div className="row">
      <div className="col-4">
        <CartContent />
      </div>

      <div id="ItemDetailContainer" className="col-8">
        <div className=" row" id="ItemDetail">
          <div className="col-8" id="ItemCarousel">
            <CarouselFadeExample imagenes={listaImagenes} />
          </div>

          <div className="col-4 d-flex flex-column " id="ItemContent">
            <h2>{proDetallada.title}</h2>
            <h3>{proDetallada.price} USD</h3>
            {/* {agregados !== 0 ? (
              <div onClick={console.log("1111")}>
                Eliminar {agregados} de <i className="bi bi-cart"></i>
              </div>
            ) : (
              ""
            )} */}
            <div id="ReviewStars">
              <i class="bi bi-star-fill">{proDetallada.rating}</i>
            </div>
            <p className="description">{proDetallada.description}</p>
            <ItemCount
              stock={proDetallada.stock}
              initial={0}
              onAdd={onAdd}
              cart={cart}
              agregados={agregados}
            />
            <button onClick={() => setcartState([])}>Limpiar Carrito</button>
            <button onClick={() => setcartState([{}, {}, {}])}>test</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
