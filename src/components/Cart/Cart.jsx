import React, { useContext } from 'react'
import { context } from '../context/Context'


export default function Cart() {
  const {cartlist} = useContext(context)

  return (
     
     cartlist.length ? cartlist.map((arr)=>(
        <div key={arr[0].menuid}>
           <div>{arr[0].name}</div>
           <div>{arr[0].price}</div>
        </div>
   
      )) : <p>cart is empty</p>
 
    

  )
}

