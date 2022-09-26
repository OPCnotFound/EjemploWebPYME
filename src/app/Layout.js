import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => (
  <div>
    <Header />
    <div className="d-flex justify-content-center">
      <Outlet />
    </div>
    <Footer />
  </div>
);
export default Layout;
