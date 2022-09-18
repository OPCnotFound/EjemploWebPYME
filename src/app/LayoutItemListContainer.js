import { Outlet } from "react-router-dom";
import ItemCateg from "../components/ItemCateg";

const LayoutItemListContainer = () => {
  return (
    <div>
      <ItemCateg />
      <Outlet />
    </div>
  );
};

export default LayoutItemListContainer;
