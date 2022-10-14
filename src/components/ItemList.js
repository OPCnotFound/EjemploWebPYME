import React, { useEffect, useState } from "react";
import Item from "./Item";

function ItemList({ productos, filter }) {
  const [pFiltered, setpFiltered] = useState([""]);

  const productosPorCategoria = () => {
    if (filter === undefined || filter === "Todos") {
      setpFiltered(productos);
    } else {
      const fil = productos.filter((ele) => ele.category === filter);
      setpFiltered(fil);
    }
  }; //selccion con filtrado por categoria

  useEffect(() => {
    productosPorCategoria();
  }, [productos, filter]);

  return (
    <div className="col-lg-10  ">
      <div className=" row" id="ItemList">
        {pFiltered.map((ele, id) => (
          <Item product={ele} key={`itemKey${id}`} id={`item${id}`} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
