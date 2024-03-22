"use client"
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import AboutImage from "../public/About.png";
import Link from "next/link";
import { FaRecycle } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { MdDesignServices } from "react-icons/md";
import Banner from '../public/Banner.png'
import Banner1 from '../public/Banner1.png'
import Banner2 from '../public/Banner2.jpg'
import Banner3 from '../public/Recruitment.webp'
import emailjs from '@emailjs/browser';



const Home = () => {

  
  const form = useRef();
  const images =[Banner, Banner1, Banner2, Banner3 ];
  const [currentImage, setCurrentImage] = useState(0);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const values = Object.fromEntries(formData.entries());
    if (Object.values(values).some(value => !value)) {
      alert('Please fill in all required fields.');
      return;
    }

    emailjs.sendForm('service_t39lfjr', 'template_fsrfjso', form.current, 'uiTw3kih5k00tX8uI')
      .then((result) => {
          alert('Thank you for details we will reach you soon!', result.text)
          setIsSubmitted(true);
        
        form.current.reset();
      }, (error) => {
          console.error("Please enter correct details", error);
      });

  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [images.length]);


  return (
    <div className="  lg:space-y-10 space-y-4 left-10 lg:mt-10 mt-10">
      <div >
            <div className="">
               
                    <div>
                        <Image
                            src={images[currentImage]}
                            alt={`Image `}
                            className='lg:h-[500px] h-[200px] w-screen shadow-lg rounded-xl'
                            
                        />
                    </div>
            
            </div>
        </div>
      <div className="text-blue-900 lg:text-2xl text-xl font-bold lg:px-20 px-6 ">Offshore</div>
      <div className="lg:text-8xl text-4xl font-bold text-blue-900  lg:px-20 px-6">RPO SERVICES</div>
      <div className="text-blue-900 font-thin lg:px-20 px-6">
        If you are looking for an RPO Services, we help you create a remarkable
        presence in market, you’ve came to the right place. We can help you take
        your business to the next level.
      </div>
      <div className="lg:flex lg:justify-between space-y-2 lg:px-20 px-6">
        <div className="lg:flex lg:gap-10  ">
          <Link href='/about' ><button className="bg-gradient-to-r from-blue-950 to-blue-800 w-48 h-12 text-white rounded-xl shadow-lg hover:opacity-90 lg:m-0 m-2 ">IT RECRUITMENT</button></Link>
         <Link href='/services'><button className="bg-gradient-to-r from-blue-950 to-blue-800 w-56 h-12 text-white rounded-xl shadow-lg hover:opacity-90">
            BENCH SALES RECRUITING
          </button></Link> 
        </div>
        <div>
          <Link href='/contact' className="text-blue-900 border-[1px] border-blue-900 w-48 h-12 p-3">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="pt-20 lg:px-20 px-6 space-y-10 ">
        <div className="lg:grid lg:grid-cols-2 gap-20 hidden">
          <div>
            <Image
              src={AboutImage}
              alt="No Image found"
              className="h-[80%] w-[100%] rounded-xl shadow-lg"
            />
          </div>
          <div >
            <div className="text-4xl text-blue-900 flex justify-center underline underline-offset-8 decoration-blue-900 ">
              About us
            </div>
            <div className="flex mt-10 text-blue-900 leading-loose">
              Force Rpo is a leading B2B (Business to Business) provider of
              exceptional IT solutions and services that provide clients a
              definite edge over the competitors keeping the highest quality
              standards. Brik Partners has simply started with a motive of
              helping others to step ahead by offering them exactly what they
              want, how they want and when they want and now in a short span its
              breadth of coverage has included multiple sectors, covering all
              over the US.
            </div>
            <div className="flex justify-center mt-20 text-white bg-gradient-to-r from-blue-950 to-blue-800 h-12 items-center rounded-lg shadow-lg">
              <Link href="/about" className="hover:text-white/50">know more</Link>
            </div>
          </div>
          
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 space-y-4 lg:space-y-0 ">
            <div className="lg:text-6xl text-4xl flex  items-center text-blue-900 font-bold underline underline-offset-8 decoration-blue-900">Why Choose Us?</div>
            <div className="text-blue-900">
              <div>
                We are the right term for your business. We have the expertise
                and knowledge to offer impartial advice and services at an
                honest price.
              </div>
              <br/>
              <div>
                With us you’ll feel heard. We listen to our client requirements
                and then select the right solution that fits. We care for your
                business as our own. We take a sincere interest in it and
                genuinely want to help your company reach its potential.
              </div>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:py-40 py-10 space-y-4 ">
            <div className="space-y-10 ">
              <div className="text-blue-900 font-bold text-2xl mt-10">Sustainability</div>
              <div className="text-5xl font-bold text-blue-900">Committed To Keep Promises</div>
              <div className="text-blue-900 font-thin">Our mission is to empower businesses with the latest technologies and digital solutions, enabling them to achieve sustainable growth and stay ahead of the competition.</div>
              <div><button className="text-white bg-gradient-to-r from-blue-950 to-blue-800 p-4 rounded-xl shadow-lg hover:opacity-90">GET IN TOUCH</button></div>
            </div>
            <div className="bg-gradient-to-r from-blue-950 to-blue-800 rounded-xl lg:mx-10 px-10 py-4 space-y-4">
              <div className="mt-10 text-white text-2xl font-bold">We Follow Best Practices</div>
              <div className="font-thin text-white">Our vision is to become a global leader in providing the best and unique bench marketing and offshore recruiting services to improve our client’s productivity and business strength.</div>
              <div className="space-y-2 pb-10">
              <div className="flex items-center gap-4"> <div><FaRecycle size={20} color="white" /></div> <div className="text-xl text-white">Sustainablility</div></div>
              <div className="flex items-center gap-4"> <div><FaClock size={20} color="white" /></div> <div className="text-xl text-white">Project On Time</div></div>
              <div className="flex items-center gap-4"> <div><RiComputerFill size={20} color="white"/></div> <div className="text-xl text-white">Modern Technology</div></div>
              <div className="flex items-center gap-4"> <div><MdDesignServices size={20} color="white" /></div> <div className="text-xl text-white">Latest Designs</div></div>
            </div>
            </div>
            
            
          </div>
          <div className="lg:grid grid-cols-2 gap-20">
            <div className="bg-gradient-to-r from-blue-950 to-blue-800 px-10 py-10 space-y-4 rounded-lg shadow-lg"> 
              <div className="text-white font-bold text-4xl">Request a Quote</div>
              <div className="text-white ">Ready to work together with us?</div>
              <form className="flex flex-col gap-10" ref={form} onSubmit={sendEmail} id="quote">
                <input type="text" placeholder="Enter your name" name="Name" className="h-14 p-2 shadow-lg outline-none rounded-lg" />
                <input type='email' placeholder="Enter your email address" name="Email"  className="h-14 p-2 shadow-lg outline-none rounded-lg"/>
                <input type="tel" placeholder="Enter your phone number" name="Phone number" className="h-14 p-2 shadow-lg outline-none rounded-lg" />
                <input type='text' placeholder="Subject" name="Subject"  className="h-14 p-2 shadow-lg outline-none rounded-lg"/>
                <textarea type="text" placeholder="Message" name="Message" className="h-14 p-2 shadow-lg outline-none rounded-lg"/>
                <button className="bg-black/50 text-white h-12 rounded-lg hover:opacity-80" type="submit">Send Message</button>
              </form>
            </div>
            <div className="pt-10">
              <div className="text-blue-900 font-bold text-2xl pb-4">Learn More From</div>
              <div className="text-blue-900 text-5xl font-bold">Frequently Asked Questions</div>
              <div className="text-blue-900 text-md pt-10">1. Where are we Located?</div>
              <div className="text-blue-900 text-md pl-5 font-thin">We are based in Hyderabad, Telangana, India</div>
              <div className="text-blue-900 text-md pt-4">2. Do you source W2 candidates?</div>
              <div className="text-blue-900 text-md pl-5 font-thin">Yes. We do provide W2 candidates recruitment services. </div>
              <div className="text-blue-900 text-md pt-4">3. Do you provide Permanent, Contract & Temporary staffing services?</div>
              <div className="text-blue-900 text-md pl-5 font-thin">Yes. We do provide Permanent and contract staffing services.</div>
              <div className="text-blue-900 text-md pt-4">4. Do you do corp-to-corp recruitment?</div>
              <div className="text-blue-900 text-md pl-5 font-thin">Yes. We do provide Corporate to Corporate recruitment services.</div>
              
            </div>
            </div>
      </div>
    </div>
  );
};

export default Home;
