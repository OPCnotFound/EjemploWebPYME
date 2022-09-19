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

  console.log(filter);

  return (
    <div>
      {pFiltered.map((ele, id) => (
        <Item product={ele} key={`item${id++}`} id={`item${id++}`} />
      ))}
    </div>
  );
}

export default ItemList;
