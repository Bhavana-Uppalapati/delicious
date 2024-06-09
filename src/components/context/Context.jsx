import { createContext, useContext, useState, useRef } from "react";
export const context = createContext();
// export const UseMyContext = () => {
//   return useContext(context);
// };

export function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  const [cartlist, setCartlist] = useState([]);
  let [filtereddata, setfiltereddata] = useState(null);
  let [data, setData] = useState([]);
  let [userName, setUserName] = useState("");
  let [userLoggedIn, setuserLoggedIn] = useState("");

  return (
    <>
      <context.Provider
        value={{
          count,
          setCount,
          cartlist,
          setCartlist,
          data,
          setData,
          filtereddata,
          setfiltereddata,
          userName,
          setUserName,
          userLoggedIn, setuserLoggedIn
        }}
      >
        {children}
      </context.Provider>
    </>
  );
}
