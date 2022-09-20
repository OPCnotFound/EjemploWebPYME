import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
);
export default Layout;
