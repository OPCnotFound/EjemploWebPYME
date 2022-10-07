import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => (
  <>
    <Header />

    <Outlet className="d-flex justify-content-center" />

    <Footer />
  </>
);
export default Layout;
