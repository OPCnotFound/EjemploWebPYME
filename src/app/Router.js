import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "../pages/ItemListContainer";
import Page404 from "../pages/Page404";
import TEST from "../pages/TEST";
import Layout from "./Layout";
import LayoutItemListContainer from "./LayoutItemListContainer";
import ItemList from "../components/ItemList";
import ItemDetailContainer from "../pages/ItemDetailContainer";

const Router = ({ p, cat }) => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ItemListContainer p={p} cat={cat} />} />
        <Route
          path="/productos"
          element={<LayoutItemListContainer p={p} cat={cat} />}
        >
          {cat.map((ele) => (
            <Route path={ele} element={<ItemList p={p} filter={ele} />} />
          ))}
          ;
          <Route path=":id" element={<ItemDetailContainer p={p} />} />
        </Route>

        <Route path="/test" element={<TEST p={p} cat={cat} />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
