import { useEffect, useState } from "react";
import Router from "./app/Router";
import { printProd } from "./components/Apis";

function App() {
  console.clear();

  const [p, setp] = useState([]);

  useEffect(() => {
    setp(printProd());
  }, []);

  return (
    <div>
      <Router p={p} />
    </div>
  );
}

export default App;
