import { useEffect, useState } from "react";
import Router from "./app/Router";
import { getCat, printProd } from "./components/Apis";

function App() {
  const [productos, setProductos] = useState([]);
  const [catProduct, setcatProduct] = useState([]);

  useEffect(() => {
    console.clear();
    setProductos(printProd());
    const cat = getCat(printProd());
    cat.unshift("Todos");
    setcatProduct(cat);
  }, []);

  return (
    <div>
      <Router p={productos} cat={catProduct} />
    </div>
  );
}

export default App;
