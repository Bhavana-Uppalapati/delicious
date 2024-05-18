import React from 'react'
import './items.css'

let items = [
    {
        id:"1",
        src:'./assests/biryani.jpg',
        title : "Biryani"
    },
    {
        id:"2",
        src:'./assests/Chicken-Shawarma.jpg',
        title: "Shawarma"
    },
    {
        id:"3",
        src:'./assests/burger.jpg',
        title: "Burger"
    },
    {
        id:"4",
        src:'./assests/cake.jpg',
        title: "Cake"
    },
    {
        id:"5",
        src:'./assests/dosa.jpg',
        title: "Dosa"
    },
    { 
        id:"6",
        src:'./assests/icecream.jpg',
        title: "Icecream"
    },
    {
        id:"7",
        src:'./assests/idly2.jpeg',
        title: "Idly"
    },
    { 
        id:"8",
        src:'./assests/momos.jpg',
        title: "Momos"
    },
    {
        id:"9",
        src:'./assests/Noodles.jpg',
        title: "Noodles"
    },
    {
        id:"10",
        src:'./assests/north-indian-cuisine.jpg',
        title: "North-Indian"
    },
    {
        id:"11",
        src:'./assests/Pizza.jpg',
        title: "pizza"
    },
    {
        id:"12",
        src:'./assests/southindian.jpg',
        title: "South-Indian"
    },

]

export default function Items() {
  
  return (
    
    <div className='d-flex items'>
       {
        items.map((ele)=>{
        
          return (
        <>
          <img src={ele.src} alt="" />
          <p key={ele.id}>{ele.title}</p>
         
        </>
        )
        })
       }
    </div>
   
       
  
  )
}
