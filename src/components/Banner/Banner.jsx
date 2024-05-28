import React from 'react'
import platter from './food4.jpeg'
import './Banner.css'
import { Link } from 'react-router-dom'

export default function Banner() {
  return (

  <div className='container mt-4 d-flex justify-content-around banner'>
    <div id="dummy"></div>
  
  <div id="pdiv">
  <p id='pdivp'>Your Favourite food delivered  Hot & Fresh</p>
 
  <p id="quote" className='pt-3'>One cannot think well, love well, sleep well, if one has not dined well</p>
 <div className='d-flex align-items-center '>
<button className='btn btn-warning mt-3'>Ordernow</button>
 <i className="fa-solid fa-arrow-right ms-3 mt-3"></i> 
 </div>
  </div>
    <img id='bannerimg' src={platter} alt="" />
 </div>
  )
}
