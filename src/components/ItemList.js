import React, { useEffect, useState } from "react";
import Item from "./Item";

function ItemList({ productos1, filter }) {
  const [pFiltered, setpFiltered] = useState([""]);

  const productosPorCategoria = () => {
    if (filter === undefined || filter === "Todos") {
      setpFiltered(productos1);
    } else {
      const fil = productos1.filter((ele) => ele.category === filter);
      setpFiltered(fil);
    }
  }; //selccion con filtrado por categoria

  useEffect(() => {
    productosPorCategoria();
  }, [productos1, filter]);

  return (
    <div className="col-9 row">
      {pFiltered.map((ele, id) => (
        <Item product={ele} key={`itemKey${ele.id}`} id={`item${id++}`} />
      ))}
    </div>
  );
}

export default ItemList;
