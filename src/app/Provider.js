import { createContext, useState } from "react";

const Provider = ({ children }) => {
  const [cartstate, setcartState] = useState([]);
  return (
    <AppContext.Provider value={[cartstate, setcartState]}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
export const AppContext = createContext();
