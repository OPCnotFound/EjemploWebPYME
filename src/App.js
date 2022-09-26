import { useEffect } from "react";
import Provider from "./app/Provider";
import Router from "./app/Router";
import RouterCopy from "./app/Router copy";

function App() {
  useEffect(() => {
    console.clear();
  });

  return (
    <Provider>
      <RouterCopy />
    </Provider>
  );
}

export default App;
