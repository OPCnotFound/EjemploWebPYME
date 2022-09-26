import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "../pages/ItemListContainer";
import Page404 from "../pages/Page404";
import TEST from "../pages/TEST";
import Layout from "./Layout";
import ItemDetailContainer from "../pages/ItemDetailContainer";
import Cart from "../pages/Cart";

const RouterCopy = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/products" element={<ItemListContainer />} />
        <Route
          path="/category/:category"
          element={<ItemListContainer filter="todos" />}
        />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/test" element={<TEST />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default RouterCopy;
