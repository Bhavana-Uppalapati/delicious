import React from 'react'
import platter from './food4.jpeg'
import './Banner.css'

export default function Banner() {
  return (

  <div className='container mt-4 d-flex justify-content-around banner'>
  <div>
  <p>Your Favourite food delivered  Hot & Fresh</p>
 
  <p id="quote" className='pt-3'>One cannot think well, love well, sleep well, if one has not dined well</p>
  </div>
  <img id='bannerimg' src={platter} alt="" />
  </div>
  )
}
