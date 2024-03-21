import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";  

const Footer = () => {
  return (
    <div className='mt-20  text-blue-800'>
        <div className='lg:flex lg:flex-row flex flex-col lg:space-y-0 space-y-10  lg:mx-20 mx-6 py-10 justify-between'>
        <div className='space-y-4'> 
            <div className=' text-2xl font-bold underline underline-offset-8 decoration-[#283755] '>Force Solutions</div>
            <div className='font-thin  cursor-pointer'>Force solutions is a recruiting </div>
            <div className='font-thin  cursor-pointer'>Mon - Fri 09:00 - 18:00 EST</div>
        </div>
        <div className='space-y-4'>
            <div  className='space-y-4 text-2xl font-bold underline underline-offset-8 decoration-[#283755]  '>Our Services</div>
            <div className='font-thin  cursor-pointer'>IT Recruiting</div>
            <div className='font-thin  cursor-pointer'>Bench Sales Recruiting</div>
        </div>
        <div className='space-y-4'>
            <div  className='space-y-4 text-2xl font-bold  underline underline-offset-8 decoration-[#283755] '>Office in India</div>
            <div className='font-thin  cursor-pointer'>Madhapur, Hyderabad, India</div>
            <div className='font-thin  cursor-pointer'>+1 (713) 954-6616</div>
            <div className='font-thin  cursor-pointer'>Example@gmail.com</div>
        </div>
        </div>
        <div className='bg-blue-800 h-[1px]'></div>
        <div className='justify-between lg:mx-20 mx-6 py-10 lg:flex lg:space-y-0 space-y-4'>
            <div>Copyright &copy; 2024 Force RPO</div>
            <Link href='https://www.bharatfolio.info' target='_blank'>Build by Bharat</Link>
            <div className='flex gap-4'>
                <Link href='/'><FaFacebookSquare size={30} className='' /></Link>
                <Link href='/'><FaTwitter size={30} className=''/></Link>
                <Link href='/'><RiInstagramFill size={30} className=''/></Link>
                <Link href='/'><FaLinkedin size={30} className=''/></Link>

            </div>
        </div>

    </div>
  )
}

export default Footer