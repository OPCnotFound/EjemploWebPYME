import React, { useEffect, useState } from "react";
import Item from "./Item";

function ItemList({ p, filter }) {
  const [pFiltered, setpFiltered] = useState([]);

  useEffect(() => {
    if (filter === undefined || filter === "Todos") {
      setpFiltered(p);
    } else {
      const fil = p.filter((ele) => ele.category === filter);
      setpFiltered(fil);
    }
  }, [filter]);

  return (
    <div className="col-10 row">
      {pFiltered.map((ele, id) => (
        <Item product={ele} key={`item${id++}`} id={`item${id++}`} />
      ))}
    </div>
  );
}

export default ItemList;
