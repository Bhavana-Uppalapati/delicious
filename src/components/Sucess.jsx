import React from 'react'
import orderplaced from "./orderplaced.png"

export default function Sucess() {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center text-center' style={{ height: "80vh" }}>
      <img src={orderplaced} alt="" />
    <h1>congratulations</h1>
    <p className='fs-4 mt-2'>Our delivery partner will reach you in short time</p>
    <i className="fa-solid fa-check" style={{ color: "green" }}> </i>
  </div>
  )
}
