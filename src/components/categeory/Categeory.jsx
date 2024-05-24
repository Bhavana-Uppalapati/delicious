import React from 'react'
import breakfast from './breakfast.png'
import lunch from './lunch.png'
import dinner from './dinner.png'
import './Categeories.css'
const categeory =[
    {   
        Image:breakfast,
        type:"Breakfast",
        desc:"Help you start your morning right",
        time:"From 7:30 am to 10:30 am"
    },
    {
        Image:lunch,
        type:"Lunch",
        desc:"Take a break from your busy schedule.",
        time:"From 11:30 am to 2:30 pm"
    },
    {
        Image:dinner,
        type:"Dinner",
        desc:"Enjoy tasty food with friends..",
        time:"From 6:30 pm to 10:30 pm"
    }
]
export default function Categeory() {
  return (

    <div className='container d-flex justify-content-between mt-5 pt-5 text-center categories'>
        {
            categeory.map((dataitem)=>{
               return (

                <div>
                   <img id="cimage"src={dataitem.Image}  style={{width:"172px"}} alt="" />
                 <h1>
                {dataitem.type}
            </h1>
            <p className='fs-5'>{dataitem.desc}</p>
            <p className='fs-5'>{dataitem.time}</p>
                </div>
               )
            })
        }
       
    </div>
  )
}
