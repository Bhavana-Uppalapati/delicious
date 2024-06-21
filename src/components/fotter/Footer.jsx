import React from 'react'

export default function Footer() {

  return (
<div style={{backgroundColor:"lightblue"}}>
      <div className='d-flex justify-content-around mt-5 pt-5'>
        <div>
        <i class="fa-brands fa-linkedin me-2"></i>
        <i class="fa-brands fa-instagram me-2"></i>
        <i class="fa-brands fa-facebook"></i>
        </div>
        <div>
            {/* <ul className='fs-4' style={{listStyle:"none"}}> */}
                <p className='fs-4'>Home</p>
                <p className='fs-4'>Help</p>
                <p className='fs-4'>Orders</p>
            {/* </ul> */}
        </div>
        <div>
            <h3>GET IN TOUCH</h3>
            <p className='fs-5'>+917864732933</p>
        </div>
        </div>
        <p className='fs-5 text-center mt-5 pb-3'>copyright2024@delicious.com-All Rights Reserved</p>
        </div>
  )
}
