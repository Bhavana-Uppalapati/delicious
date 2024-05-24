import { createContext, useContext, useState } from "react";
export const context = createContext();
export const UseMyContext =()=>{
    return useContext(context)
}

export function CountProvider({children}){

        const [count,setCount]= useState(0);
        const [cartlist,setCartlist] = useState([])
      
        return (
            <>
            <context.Provider value={{count,setCount,cartlist,setCartlist}}>
                {children}
            </context.Provider>
            </>
        )
}

