import React from 'react'
import { useState,useEffect ,useContext} from 'react'
import { useParams } from 'react-router-dom'
import { context } from '../context/Context'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Menu() {
  const {count,setCount,cartlist,setCartlist} = useContext(context)
 
const [resMenu,setresMenu] = useState([])
  let [filteredmenu,setfilteredmenu] = useState([])
  const {id} = useParams()
  const menu = async ()=>{
    let response = await fetch(`https://food-1-rcun.onrender.com/${id}`,{method:"GET"})
    let menuList = await response.json()
    setresMenu(menuList);
}
  useEffect(()=>{
    
    menu()
  },[])
  const buttonClicked = (id)=>{
      for(let arr of cartlist){
        
          if(arr[0].menuid===id){
            return true
          }
         
      }
  }
  function addtocart(id){

    let arr = resMenu.filter((obj)=>{
    
          return id==obj.menuid
          
});
    arr[0].quantity = 1
    
    setCartlist([...cartlist,arr])
    toast("item added to cart")
    
  }

return (
    <div className='container mt-5 pt-5 '>
      
    
        {
         (resMenu.length >0) ? ( resMenu.map((data,index)=>{
          return ( 
            <>
          
            <div key={index} className=' d-flex justify-content-between align-items-center mt-5'>
          <div>
          <h1 className=''>{data.name}</h1>
          <h5> price - ${data.price}</h5>
          <p className='fs-4 '>{data.description}</p>
          <p className='fs-3 '> Calories- {data.calories}</p>
          </div>
         
          <div>
          <button onClick={()=>{
            setCount(count+1)
            addtocart(data.menuid)
            // handleAddToCart()
           

          }} className='btn btn-warning' disabled={buttonClicked(data.menuid)} >Add to cart</button> 
          </div>
         
            </div>
            <hr />
            </>
          
        )
         

          })): <h1>no data found</h1>
        } 
    </div>
  )
  
}
