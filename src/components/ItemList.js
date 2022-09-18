import React from "react";
import Item from "./Item";

function ItemList({ p }) {
  return (
    <div>
      {p.map((ele, id) => (
        <Item product={ele} key={`item${id++}`} id={`item${id++}`} />
      ))}
    </div>
  );
}

export default ItemList;
