import { useEffect } from "react";
import { createContext, useState } from "react";

export const AppContext = createContext();

const Provider = ({ children }) => {
  const [cartstate, setcartState] = useState([]);
  const [userLogstate, setUserLogstate] = useState({});

  const userTest = {
    id: "Hu5BlIyNMT6ZMmQzLKUw",
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  useEffect(() => {
    setUserLogstate(userTest);
  }, []);

  return (
    <AppContext.Provider
      value={[cartstate, setcartState, userLogstate, setUserLogstate]}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
