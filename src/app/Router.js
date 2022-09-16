import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Page2 from "../pages/Page2";
import Page404 from "../pages/Page404";
import Layout from "./Layout";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/page2/" element={<Page2 />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
