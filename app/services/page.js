import React from "react";
import { FaBuilding } from "react-icons/fa";
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import { IoHome } from "react-icons/io5";
import Header from "../Header";
import Header1 from "../Header1";
import Line from "../../Pages/Line";
import Image from "next/image";
import Bench from "../../public/Bg.png";
import Offshore from "../../public/Offshore.jpeg";
import Recruit from "../../public/Recruitment.webp";
import Footer from "../Footer";

const Services = () => {
  return (
    <div className="bg-white">
       <title>Force-Services</title>
      <Header />
      <Line />
      <Header1 />
      <div className="lg:px-20 px-6 lg:space-y-40 space-y-10">
        <div className="flex justify-center items-center text-blue-900 font-bold text-3xl lg:text-[100px] lg:mt-40 mt-20">
          Services
        </div>

        <div className="lg:grid lg:grid-cols-2 gap-20 lg:spacey-0 space-y-20">
          <div className="lg:space-y-8 space-y-4">
            <div className="text-blue-900 lg:text-3xl font-bold lg:pt-16">
              About Us
            </div>
            <div className="text-blue-900 lg:text-5xl ">
              We Are Leading RPO Services
            </div>
            <div className="text-blue-900 font-thin">
              If you are looking for the best Bench Marketing, and Offshore
              Recruiting to grow your business, we are here to help. We are a
              team of certified experts with tremendous experience in Bench
              Marketing, and Offshore Recruiting who’ll walk with you all
              through.
            </div>
            <div>
              <button className="bg-gradient-to-r from-blue-950 to-blue-800  p-4 text-white rounded-xl my-10 hover:bg-white/50">
                OUR SERVICES
              </button>
            </div>
          </div>
          <div className="space-y-10 ">
            <div className="lg:flex gap-10 lg:space-y-0 space-y-2">
              <div>
                <FaBuilding size={40} className="text-blue-900" />
              </div>
              <div className="space-y-4 ">
                <div className="text-blue-900 lg:text-2xl">Bench Marketing</div>
                <div className="text-blue-900 font-thin">
                  Just send across your bench details (Hot-List) and we will
                  source and screen the right jobs with a high probability of
                  closure. We offer the full lifecycle services including
                  negotiation and post submission follow-up’s. We offer this
                  service at a flat rate of $500/month per resource.
                </div>
              </div>
            </div>
            <div className="lg:flex gap-10 lg:space-y-0 space-y-2">
              <div>
                <HiMiniBuildingLibrary size={40} className="text-blue-900" />
              </div>
              <div className="space-y-4">
                <div className="text-blue-900 lg:text-2xl">
                  Offshore Recruitment
                </div>
                <div className="text-blue-900 font-thin">
                  A dedicated recruiter is assigned to you to work on your
                  requirement needs. He/she will work on your priorities and
                  shall provide periodic (daily/weekly and monthly) updates.
                </div>
              </div>
            </div>
            <div className="lg:flex gap-10 lg:space-y-0 space-y-2">
              <div>
                <IoHome size={40} className="text-blue-900" />
              </div>
              <div className="space-y-4">
                <div className="text-blue-900 lg:text-2xl">
                  Recruitment in India
                </div>
                <div className="text-blue-900 font-thin">
                  Market fluctuations make long-term solutions challenging, and
                  in-house recruiting may not always be profitable or on time.
                  Recruitment Process Outsourcing is your best bet in such
                  situations. As a top RPO agency in India, we serve IT and
                  Non-IT verticals.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-20 px-6 py-32 lg:space-y-20 space-y-10">
        <div>
          <div className="flex justify-center text-xl text-blue-900">
            Our Services
          </div>
          <div className="flex justify-center lg:text-4xl text-blue-900">
            RPO Services
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-3 gap-2 lg:space-y-0 space-y-20">
          <div className="space-y-4">
            <div>
              
              <Image
                src={Bench}
                alt="No Image Found"
                className="lg:h-72 h-64 w-screen  rounded-xl"
              />
            </div>
            <div className="space-y-4 p-2">
              
              <div className="lg:text-2xl text-xl text-blue-900">Bench Marketing</div>
              <div className=" font-thin text-blue-900 pr-2">
                Force Solutions provides qualified recruiters who represent your
                company and market your consultants/ employees. Our recruiters
                use years of experience to find relevant positions for your
                bench prospects.
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <div>
                
                <Image
                  src={Offshore}
                  alt="No Image Found"
                  className="lg:h-72 h-64 w-screen rounded-xl"
                />
              </div>
              <div className="space-y-4 p-2 ">
                
                <div className="lg:text-2xl text-xl text-blue-900">
                  Offshore Recruitment
                </div>
                <div className=" font-thin text-blue-900 pr-2">
                  Force Solutions provides full-cycle recruiting services in USA
                  and India, from identifying talent to selection/ evaluation
                  and negotiation.
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <div>
                
                <Image
                  src={Recruit}
                  alt="No Image Found"
                  className="lg:h-72 h-64 w-screen rounded-xl"
                />
              </div>
              <div className="space-y-4 p-2">
                
                <div className="lg:text-2xl text-xl text-blue-900">
                  Recruitment in India
                </div>
                <div className=" font-thin text-blue-900 pr-2">
                  As a top RPO agency in India, we serve IT and Non-IT
                  verticals.
                </div>
              </div>
            </div>
          </div>
         
        </div>
       
      </div>
      <div className="bg-black/10 rounded-xl shadow-lg text-blue-900 lg:px-20 px-6 py-10 space-y-4">
            <div className="lg:text-5xl text-2xl text-blue-900">Let us together build a flourishing business</div>
            <div className="font-thin">When connected with us, you aren’t growing your business alone. We have your back and put in our best to contribute to the growth of your entire team and organization. So, if you are looking for the right agency that’ll help you build a good online presence and bring in more conversions and revenue, we are right here!</div>
          </div>
          <Footer />
    </div>
  );
};

export default Services;
