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
    setcartState(
      JSON.parse(
        `[{"localid":4,"title":"OPPOF19","description":"OPPO F19 is officially announced on April 2021.","price":280,"discountPercentage":17.91,"rating":4.3,"stock":123,"brand":"OPPO","category":"smartphones","thumbnail":"https://dummyjson.com/image/i/products/4/thumbnail.jpg","images":["https://dummyjson.com/image/i/products/4/1.jpg","https://dummyjson.com/image/i/products/4/2.jpg","https://dummyjson.com/image/i/products/4/3.jpg","https://dummyjson.com/image/i/products/4/4.jpg","https://dummyjson.com/image/i/products/4/thumbnail.jpg"],"onCart":5},{"localid":10,"title":"HP Pavilion 15-DK1056WM","description":"HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10","price":1099,"discountPercentage":6.18,"rating":4.43,"stock":89,"brand":"HP Pavilion","category":"laptops","thumbnail":"https://dummyjson.com/image/i/products/10/thumbnail.jpeg","images":["https://dummyjson.com/image/i/products/10/1.jpg","https://dummyjson.com/image/i/products/10/2.jpg","https://dummyjson.com/image/i/products/10/3.jpg","https://dummyjson.com/image/i/products/10/thumbnail.jpeg"],"onCart":1},{"localid":7,"title":"Samsung Galaxy Book","description":"Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched","price":1499,"discountPercentage":4.15,"rating":4.25,"stock":50,"brand":"Samsung","category":"laptops","thumbnail":"https://dummyjson.com/image/i/products/7/thumbnail.jpg","images":["https://dummyjson.com/image/i/products/7/1.jpg","https://dummyjson.com/image/i/products/7/2.jpg","https://dummyjson.com/image/i/products/7/3.jpg","https://dummyjson.com/image/i/products/7/thumbnail.jpg"],"onCart":1},{"localid":19,"title":"Skin Beauty Serum.","description":"Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m","price":46,"discountPercentage":10.68,"rating":4.42,"stock":54,"brand":"ROREC White Rice","category":"skincare","thumbnail":"https://dummyjson.com/image/i/products/19/thumbnail.jpg","images":["https://dummyjson.com/image/i/products/19/1.jpg","https://dummyjson.com/image/i/products/19/2.jpg","https://dummyjson.com/image/i/products/19/3.png","https://dummyjson.com/image/i/products/19/thumbnail.jpg"],"onCart":4}]`
      )
    );
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
