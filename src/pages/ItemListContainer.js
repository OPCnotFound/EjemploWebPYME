import ItemCateg from "../components/ItemCateg";
import ItemList from "../components/ItemList";

function ItemListContainer({ p, cat }) {
  return (
    <div>
      <ItemCateg cat={cat} />
      <ItemList p={p} cat={cat} />
    </div>
  );
}

export default ItemListContainer;
