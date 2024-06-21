import React from 'react'
import Banner from './Banner/Banner'
import Categeory from './categeory/Categeory'
import Restaurant from './retaurant/Restaurant'
import Steps from './steps/Steps'
import Footer from './fotter/Footer'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
       <div> <Banner/> <Categeory/>
    <Restaurant/> <Footer/></div> 
  )
}
