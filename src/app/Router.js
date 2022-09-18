import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "../pages/ItemListContainer";
import Page404 from "../pages/Page404";
import TEST from "../pages/TEST";
import Layout from "./Layout";
import LayoutItemListContainer from "./LayoutItemListContainer";
import ItemList from "../components/ItemList";

/* const filteredList = (arr, fil) => arr.filter((ele) => ele.category === fil); */

const Router = ({ p, cat }) => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ItemListContainer p={p} cat={cat} />} />
        <Route
          path="/productos"
          element={<LayoutItemListContainer p={p} cat={cat} />}
        >
          <Route path="todos" element={<ItemList p={p} />} />
          <Route
            path="smartphones"
            element={<ItemList p={p} filter="smartphones" />}
          />
          <Route path="laptops" element={<ItemList p={p} filter="laptops" />} />
          <Route path="fragances" element={<ItemList p={p} />} />
          <Route path="skincare" element={<ItemList p={p} />} />
          <Route path="groceries" element={<ItemList p={p} />} />
          <Route path="home-decoration" element={<ItemList p={p} />} />
        </Route>

        <Route path="/test" element={<TEST p={p} cat={cat} />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
