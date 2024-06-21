import React, { useContext } from 'react'
import { context } from '../context/Context'
import breakfast from './breakfast.png'
import lunch from './lunch.png'
import dinner from './dinner.png'
import './Categeories.css'


const categeory =[
    {   
        id:"123",
        group:"breakfast",
        Image:breakfast,
        type:"Breakfast",
        desc:"Help you start your morning right",
        time:"From 7:30 am to 10:30 am"
    },
    { 
        id:"234",
        group:"lunch",
        Image:lunch,
        type:"Lunch",
        desc:"Take a break from your busy schedule.",
        time:"From 11:30 am to 2:30 pm"
    },
    {   id:"456",
        group:"lunch and dinner",
        Image:dinner,
        type:"Dinner",
        desc:"Enjoy tasty food with friends..",
        time:"From 6:30 pm to 10:30 pm"
    }
]

export default function Categeory() {
   
    let {data,filtereddata,setfiltereddata} = useContext(context)
 function handleCategoryClick(action){
        console.log(action)
        filtereddata = data.filter((data)=>{
            return data.cateogry === action
         });
         setfiltereddata(filtereddata)
    }
  return (

    <div className='container d-flex justify-content-between mt-5 text-center categories'>
        {
            categeory.map((dataitem)=>{
                console.log(dataitem)
               return (
                   <div key={dataitem.id}>
                   <img id="cimage"src={dataitem.Image}  style={{width:"172px"}} alt="" onClick={()=>{
                    handleCategoryClick(dataitem.group)
                   }}/>
                 <h1>
                {dataitem.type}
            </h1>
            <p className='fs-5'>{dataitem.desc}</p>
                </div>
               )
            })
        }
       
    </div>
  )
}
