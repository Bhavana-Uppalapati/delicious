import React from 'react'
import { useState,useEffect ,useContext} from 'react'
import { useParams } from 'react-router-dom'
import { context } from '../context/Context'

export default function Menu() {
  const {count,setCount,cartlist,setCartlist} = useContext(context)
  
 
  const [resMenu,setresMenu] = useState([])
  const {id} = useParams()
  console.log(id)

  const menu = async ()=>{
    let response = await fetch(`https://food-1-rcun.onrender.com/${id}`,{method:"GET"})
    let menuList = await response.json()
    setresMenu(menuList);
}
  useEffect(()=>{
    
    menu()
  },[])
  
  function addtocart(id){

    let arr = resMenu.filter((obj)=>{
    
          return id==obj.menuid
          
})
    setCartlist([...cartlist,arr])
  }
  console.log(cartlist)




  
return (
    <div className='container mt-5 pt-5 '>
        {
          resMenu.map((data,index)=>{
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

          }} className='btn btn-warning'>Add to cart</button> 
          </div>
         
            </div>
            <hr />
            </>
          
        )
         

          })
        }
    </div>
  )
  
}
