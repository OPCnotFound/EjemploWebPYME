import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => (
  <div>
    <Header />
    <Outlet />
    <footer> footer</footer>
  </div>
);
export default Layout;
