import ItemCateg from "../components/ItemCateg";
import ItemList from "../components/ItemList";

function ItemListContainer({ p }) {
  return (
    <div>
      <ItemCateg />
      <ItemList p={p} />
    </div>
  );
}

export default ItemListContainer;
