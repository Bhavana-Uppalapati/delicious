import { createContext, useContext, useState, useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";
export const context = createContext();
// export const UseMyContext = () => {
//   return useContext(context);
// };

export function CountProvider({ children }) {
  // const stripepromise = loadStripe(
  //   "pk_test_51PU0z4P1TthxkHW3hljTgCOCSr2OTlMqSuWhK25rGnkAPgFMLicDplbeTSGUM17sETxqGDTrhO0dnHJ1le3bmeJi00LptDjxON"
  // ); 
  const [count, setCount] = useState(0);
  const [cartlist, setCartlist] = useState([]);
  let [filtereddata, setfiltereddata] = useState(null);
  let [data, setData] = useState([]);
  let [userName, setUserName] = useState("");
  let [userLoggedIn, setuserLoggedIn] = useState(""); 
  let [orderPlaced,setOrderPlaced] = useState("")


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
          userLoggedIn, setuserLoggedIn,orderPlaced,setOrderPlaced
        }}
      >
        {children}
      </context.Provider>
    </>
  );
}
