import { useEffect } from "react";
import { createContext, useState } from "react";

export const AppContext = createContext();

const Provider = ({ children }) => {
  const [cartstate, setcartState] = useState([]);
  const [userLogstate, setUserLogstate] = useState({});

  const userTest = {
    id: 1,
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

/* import React, { useContext, useState } from "react";
const CountContext = React.createContext("count");
const DescendantA = () => {
  const { count, setCount, count2, setCount2 } = useContext(CountContext);
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Click me {count}</button>
      <button onClick={() => setCount2((c) => c + 1)}>Click me {count2}</button>
    </>
  );
};
const DescendantB = () => {
  const { count, setCount, count2, setCount2 } = useContext(CountContext);
return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Click me {count}</button>
      <button onClick={() => setCount2((c) => c + 1)}>Click me {count2}</button>
    </>
  );
};
export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount, count2, setCount2 }}>
      <DescendantA />
      <DescendantB />
    </CountContext.Provider>
  );
} */
