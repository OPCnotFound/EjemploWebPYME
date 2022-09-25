import { useEffect, useState } from "react";
import Provider from "./app/Provider";
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
    <Provider>
      <Router p={productos} cat={catProduct} />
    </Provider>
  );
}

export default App;
