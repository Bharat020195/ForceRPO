"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import '../app/globals.css'
import Image from 'next/image';
import Logo from '../public/Logo.png'

const Header = () => {

  const[Menu, Setmenu] = useState();

  const handleMenu = () => {

    Setmenu(!Menu)
  }


  return (
    <div className='flex justify-between items-center lg:px-20 px-4 w-screen'>
        <Image src={Logo} alt='No Logo Found' className=' w-40 h-40 ' />
        <div className='text-blue-900 text-lg lg:flex hidden '> Make a call: +1 (713) 954-6616</div>
        <div className='lg:flex hidden space-x-6'>   
         <Link href=''><FaFacebookSquare  size={36} className='text-blue-600 hover:animate-bounce'/></Link>
         <Link href=''><FaTwitter size={36} className='text-sky-400 hover:animate-bounce' /></Link>
         <Link href=''><RiInstagramFill size={36} className='text-pink-600 hover:animate-bounce'/></Link>
         <Link href=''><FaLinkedin size={36} className='text-blue-600 hover:animate-bounce' /></Link>
        </div>
        <div className='lg:hidden flex '>
          <IoMenu size={30} className='text-blue-900' onClick={handleMenu}/>
          {Menu && (
            <div className='absolute w-screen left-0 p-4 bg-white mt-20'>
              <ul className='space-y-2'>
                <li><Link href='/' className='hover:text-blue-900/50'>Home</Link></li>
                <li><Link href='/about' className='hover:text-blue-900/50'>About</Link></li>
                <li><Link href='/services' className='hover:text-blue-900/50'>Services</Link></li>
                <li><Link href='/contact' className='hover:text-blue-900/50'>Contact Us</Link></li>
              </ul>
            </div>
          )}
        </div>
    </div>
  )
}

export default Header