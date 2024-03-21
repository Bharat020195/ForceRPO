import Header from "@/app/Header";
import Header1 from "@/app/Header1";
import React from "react";
import Line from "../../Pages/Line";
import Footer from "@/app/Footer";
import { FaBuilding } from "react-icons/fa";
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import { IoHome } from "react-icons/io5";
import Link from "next/link";
import { FaRecycle } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { MdDesignServices } from "react-icons/md";

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      <title>Force-About</title>
      <Header />
      <Line />
      <Header1 />
      <div className="lg:px-20 px-6 lg:space-y-40 space-y-10">
        <div className="flex justify-center items-center text-blue-900 font-bold text-3xl lg:text-[100px] lg:mt-40 mt-20">
          About Us
        </div>

        <div className="lg:grid lg:grid-cols-2 gap-20 lg:spacey-0 space-y-20">
          <div className="lg:space-y-8 space-y-4">
            <div className="text-blue-900 lg:text-3xl font-bold lg:pt-16">
              About us
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
              <button className="bg-gradient-to-r from-blue-950 to-blue-800 p-4 text-white rounded-xl my-10 hover:bg-white/50">
                OUR SERVICES
              </button>
            </div>
          </div>
          <div className="space-y-10">
            <div className="lg:flex gap-10 lg:space-y-0 space-y-2">
              <div>
                <FaBuilding size={40} className="text-blue-900" />
              </div>
              <div className="space-y-4">
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
        <div className="bg-black/10 text-blue-900 p-10 font-thin rounded-xl shadow-lg space-y-10 ">
          <div className="space-y-4">
            <div>
              Welcome to <Link href='/' className="font-bold">Force Solutions!</Link> We are a leading provider of
              comprehensive IT services and staffing solutions, specializing in
              bridging the gap between technology and talent.
            </div>
            <div>
              At <Link href='/' className="font-bold">Force Solutions</Link>, we pride ourselves on our commitment to
              excellence, integrity, and customer satisfaction. Our mission is
              to empower businesses with cutting-edge IT services and connect
              them with top-notch IT talent. Partner with us and experience the
              <Link href='/' className="font-bold">Force Solutions</Link> difference.
            </div>
            <div>
              Whether you are seeking transformative IT services or exceptional
              IT talent, <Link href='/' className="font-bold">Force Solutions</Link> is here to help you unlock your
              organization’s full potential. Join us on this journey of
              innovation, growth, and success. Contact us today to learn more
              about our services and how we can partner with you to achieve your
              goals.
            </div>
            <div>
              It’s your job to recognize talent when you see it and we think our
              recruitment expertise will stand up to your critical eye. We
              understand recruiting and human resources in general is tough.
              After all, you’re competing to find the best talent possible to
              fill very important roles. It’s crucial that your firm stands out
              from the rest, and with our working on your behalf, it can.
            </div>
          </div>
          <div className="space-y-4">
            <div className="font-bold">Why Choose Us ?</div>
            <div>
              We offer Offshore Recruitment Services which nowadays is a common
              and a best recruitment strategy. With the rise of globalisation,
              the hiring solutions have emerged into something more detailed,
              competitive as well as strategic. We are qualified to excel all
              challenges. Our skilled professionals are highly innovative,
              strong, determined, intelligent and creative to achieve and
              accomplish your needs in a hassle free and smart way.{" "}
            </div>
            <div>
              We guarantee to accomplish your needs with the quality you desire.
              We deliver a quick response service with multiple approaches to
              achieve your objectives and to assure you get what you demand for.
              Our multiple approach helps us to achieve goals of your
              organization by hiring the needed members for your team. We offer
              the best recruitment solutions in India.
            </div>
          </div>
          <div className="space-y-4">
            <div>Great Content Has Benefits</div>
            <div>
              Now, what is it that sets your corporation, resume writing service
              or recruitment agency apart? That’s a question we can help you
              answer. Our expert marketers are adept at spelling out the
              benefits of working with you. We’ll talk with you and learn more
              about your history and what you have to offer, then devote a to
              the task of selling companies and candidates on you. Here are just
              a few of the items your potential customers look for:
            </div>
            <div>
              <li>Mission statement</li>
              <li>Company culture</li>
              <li>Industry knowledge</li>
              <li>High-level connections</li>
              <li>History of success</li>
              <li>Testimonials from satisfied customers</li>
            </div>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2  py-10 lg:space-y-4 space-y-20 ">
            <div className="space-y-10 ">
              <div className="text-blue-900 font-bold text-2xl mt-10">Sustainability</div>
              <div className="text-5xl font-bold text-blue-900">Committed To Keep Promises</div>
              <div className="text-blue-900 font-thin">Our mission is to empower businesses with the latest technologies and digital solutions, enabling them to achieve sustainable growth and stay ahead of the competition.</div>
              <div><button className="text-white bg-gradient-to-r from-blue-950 to-blue-800 p-4 rounded-xl">GET IN TOUCH</button></div>
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
      </div>
      <Footer />
    </div>
  );
};

export default About;
