import React from 'react'
import './items.css'
import biryani from './assests/biryani.jpg'
import shawarma from './assests/Chicken-Shawarma.jpg'
import burger from './assests/burger.jpg'
import cake from './assests/cake.jpg'
import dosa from './assests/dosa.jpg'
import Icecream from './assests/icecream.jpg'
import Idly from './assests/idly2.jpg'
import Momos from './assests/momos.jpg'
import Noodles from './assests/Noodles.jpg'
import north from './assests/north-indian-cuisine.jpg'
import pizza from './assests/Pizza.jpg'
import South from './assests/southindian.jpg'

let items = [
    {
        id:"1",
        src: biryani,
        title : "biryani"
    },
    {
        id:"2",
        src:shawarma,
        title: "Shawarma"
    },
    {
        id:"3",
        src:burger,
        title: "Burger"
    },
    {
        id:"4",
        src:cake,
        title: "Cake"
    },
    {
        id:"5",
        src:dosa,
        title: "Dosa"
    },
    { 
        id:"6",
        src:Icecream,
        title: "Icecream"
    },
    {
        id:"7",
        src:Idly,
        title: "Idly"
    },
    { 
        id:"8",
        src:Momos,
        title: "Momos"
    },
    {
        id:"9",
        src:Noodles,
        title: "Noodles"
    },
    {
        id:"10",
        src:north,
        title: "North-Indian"
    },
    {
        id:"11",
        src:pizza,
        title: "pizza"
    },
    {
        id:"12",
        src:South,
        title: "South-Indian"
    }


]


const ImageGallery = ( ) => {
  // Ref for the container
  const containerRef = React.useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: 0,
        left: -200, // Adjust the value to control the scroll distance
        behavior: 'smooth',
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: 0,
        left: 200, // Adjust the value to control the scroll distance
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
  
    <div className='d-flex justify-content-end scroll mb-4 mt-3'>
    <button onClick={scrollLeft}><i className="fa-solid fa-arrow-left"></i></button>
    <button onClick={scrollRight}><i className="fa-solid fa-arrow-right"></i></button>
    </div>
    <div >
   
      <div
        className='images-container container ' 
        ref={containerRef}
        style={{
          display: 'flex',
      
          scrollBehavior: 'smooth',
          overflowX:"hidden"
       
        }}
      >
        {items.map((ele) => (
          <div className="items" key={ele.id} style={{ minWidth: '150px', margin: '0 0px' }}>
            <img src={ele.src} alt={ele.title} style={{width:"100px",height:"100px"}} className='mb-3' />
            <p>{ele.title}</p>
          </div>
        ))}
        
      </div>
    </div>
    </>
  );
};

export default ImageGallery;

