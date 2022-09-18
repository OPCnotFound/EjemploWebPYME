import React from "react";
import Item from "./Item";

import { useEffect, useState } from "react";

import { printProd } from "./Apis";

function ItemList() {
  const [k, setk] = useState([]);

  useEffect(() => {
    setk(printProd());
  }, []);

  return (
    <div>
      {k.map((ele, id) => (
        <Item product={ele} key={`item${id++}`} id={`item${id++}`} />
      ))}
    </div>
  );
}

export default ItemList;
