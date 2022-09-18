import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "../pages/ItemListContainer";
import Page404 from "../pages/Page404";
import TEST from "../pages/TEST";
import Layout from "./Layout";
import LayoutItemListContainer from "./LayoutItemListContainer";

import ItemList from "../components/ItemList";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ItemListContainer />} />
        <Route path="/productos" element={<LayoutItemListContainer />}>
          <Route path="todos" element={<ItemList />} />
        </Route>

        <Route path="/test" element={<TEST />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
