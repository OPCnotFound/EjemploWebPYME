import { Outlet } from "react-router-dom";
import ItemCateg from "../components/ItemCateg";

const LayoutItemListContainer = ({ p, cat }) => {
  return (
    <div>
      <ItemCateg p={p} cat={cat} />
      <Outlet />
    </div>
  );
};

export default LayoutItemListContainer;
