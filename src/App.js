import { useEffect } from "react";
import Provider from "./app/Provider";
import Router from "./app/Router";

function App() {
  useEffect(() => {});

  return (
    <Provider>
      <Router />
    </Provider>
  );
}

export default App;
