"use client"
import React from 'react'
import Header from '../Header';
import Header1 from '../Header1';
import Line from '../../Pages/Line';
import Footer from '../Footer';
import Map from '../../Pages/map'

const contact = () => {
  return (
    <div className='bg-white min-h-screen'>
       <title>Force-Contact</title>
       <Header />
      <Line />
      <Header1 />
      <div className="lg:px-20 px-6 lg:space-y-40 space-y-10">
        <div className="flex justify-center items-center text-blue-900 font-bold text-3xl lg:text-[100px] lg:mt-40 mt-20">
          Contact Us
        </div>
        <div className='flex justify-center lg:text-4xl text-3xl text-blue-900'>Contact Details</div>
        <div className='lg:grid lg:grid-cols-2'>
          <div className=' text-blue-900 '> 
          <div className='space-y-10'>
          <div className='text-3xl font-semibold'>India Office</div>
            <div>
              <div className='text-xl font-semibold'>Address :</div>
              <div className='font-thin'>Madhapur, Hyderabad</div>
            </div>
            <div>
            <div>Phone :</div>
              <div>+1 (713) 954-6616</div>
            </div>
            <div>
              <div>Email :</div>
              <div>admin@forcerpo.in</div>
            </div>
          </div>
          <div>
            
          </div>
          </div>
          <div className='lg:w-[100%] w-[50%]'><Map /> </div>
        </div>
     </div>
     <Footer />
     
    </div>
  )
}

export default contact;