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
    <div className="col-9 row">
      {pFiltered.map((ele, id) => (
        <Item product={ele} key={`itemKey${ele.id}`} id={`item${id++}`} />
      ))}
    </div>
  );
}

export default ItemList;
