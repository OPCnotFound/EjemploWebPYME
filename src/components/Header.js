import NavBar from "./Navbar";

const Header = () => {
  return (
    <div className="container d-flex flex-row">
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/004/795/456/original/illustration-graphic-of-electronic-store-logo-perfect-to-use-for-technology-company-free-vector.jpg"
          alt="logo-empresa"
          height="200px"
        />
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
