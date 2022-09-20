import ItemCateg from "../components/ItemCateg";
import ItemList from "../components/ItemList";

function ItemListContainer({ p, cat }) {
  return (
    <div className=" container row " id="ItemListContainer">
      <ItemCateg cat={cat} />
      <ItemList p={p} filter={undefined} />
    </div>
  );
}

export default ItemListContainer;
