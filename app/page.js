import React from 'react'
import Header from './Header'
import Header1 from './Header1'

import Home from '../Pages/Home'
import Line from '../Pages/Line'
import Footer from './Footer'
import './globals.css'

const page = () => {
  return (
    <div className=''> 
    <title>Force-Home</title>
      <Header/>
      <Line/>
      <Header1 />
      <Home />
      <Footer />
     
    </div>
  )
}

export default page