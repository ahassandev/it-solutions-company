import React, { useState } from 'react'
import { FiPhoneCall, FiMail, FiMapPin, FiInstagram, FiTwitter, FiGithub, FiLinkedin, FiArrowRight} from "react-icons/fi";



function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-linear-to-b from-slate-900 to-slate-800 text-gray-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          
          <div className="bg-linear-to-b from-cyan-500 to-cyan-600 p-10 text-white w-full md:w-96 lg:w-96 lg:shrink-0 h-fit rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                <span className="text-cyan-600 font-bold text-xl">👤</span>
              </div>
              <h2 className="text-3xl font-bold">Startup</h2>
            </div>
            
            <p className="text-md leading-relaxed mb-10 text-cyan-50 font-medium ">
              Lorem diam sit erat dolor elit et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex rounded overflow-hidden items-stretch w-full">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 min-w-0 px-5 py-4 text-gray-800 placeholder-gray-600 focus:outline-none bg-white text-sm"
                required
              />
              <button
                type="submit"
                className="bg-slate-900 px-6 py-4 text-white font-bold hover:bg-slate-800 transition text-sm flex items-center justify-center cursor-pointer"
              >
                Sign Up
              </button>
            </form>
          </div>

          
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            
            <div>
              <h3 className="text-white text-2xl font-bold mb-4 pb-2 border-b-2 border-cyan-500 inline-block">
                Get In Touch
              </h3>
              <div className="space-y-5 mt-6">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-500 text-lg shrink-0"><FiMapPin /></span>
                  <span className="text-lg text-gray-300">123 Street, New York, USA</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-500 text-lg shrink-0"><FiMail /></span>
                  <a href="mailto:info@example.com" className="text-lg text-gray-300 hover:text-cyan-400 transition">
                    info@example.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-500 text-lg shrink-0"><FiPhoneCall /></span>
                  <a href="tel:+01234567890" className="text-lg text-gray-300 hover:text-cyan-400 transition">
                    +012 345 67890
                  </a>
                </div>
              </div>

              
              <div className="flex gap-3 mt-8">
                <a href="#" className="w-11 h-11 bg-cyan-500 rounded flex items-center justify-center text-white hover:bg-cyan-600 transition font-bold text-xl">
                  <FiTwitter />
                </a>
                <a href="#" className="w-11 h-11 bg-cyan-500 rounded flex items-center justify-center text-white hover:bg-cyan-600 transition font-bold text-xl">
                  <FiInstagram />
                </a>
                <a href="#" className="w-11 h-11 bg-cyan-500 rounded flex items-center justify-center text-white hover:bg-cyan-600 transition font-bold text-xl">
                  <FiGithub />
                </a>
                <a href="#" className="w-11 h-11 bg-cyan-500 rounded flex items-center justify-center text-white hover:bg-cyan-600 transition font-bold text-xl">
                  <FiLinkedin />
                </a>
              </div>
            </div>


            <div>
              <h3 className="text-white text-2xl font-bold mb-4 pb-2 border-b-2 border-cyan-500 inline-block">
                Quick Links
              </h3>
              <ul className="space-y-4 mt-4">
                <li><a href="#" className="flex items-center gap-2 text-md text-gray-300 hover:text-cyan-400 transition font-medium">
                  <span className="text-cyan-500 text-lg"><FiArrowRight /></span> Home
                </a></li>
                <li><a href="#" className="flex items-center gap-2 text-md text-gray-300 hover:text-cyan-400 transition font-medium">
                  <span className="text-cyan-500 text-lg"><FiArrowRight /></span> About Us
                </a></li>
                <li><a href="#" className="flex items-center gap-2 text-md text-gray-300 hover:text-cyan-400 transition font-medium">
                  <span className="text-cyan-500 text-lg"><FiArrowRight /></span> Our Services
                </a></li>
                <li><a href="#" className="flex items-center gap-2 text-md text-gray-300 hover:text-cyan-400 transition font-medium">
                  <span className="text-cyan-500 text-lg"><FiArrowRight /></span> Meet The Team
                </a></li>
                <li><a href="#" className="flex items-center gap-2 text-md text-gray-300 hover:text-cyan-400 transition font-medium">
                  <span className="text-cyan-500 text-lg"><FiArrowRight /></span> Latest Blog
                </a></li>
                <li><a href="#" className="flex items-center gap-2 text-md text-gray-300 hover:text-cyan-400 transition font-medium">
                  <span className="text-cyan-500 text-lg"><FiArrowRight /></span> Contact Us
                </a></li>
              </ul>
            </div>

            
            <div>
              <h3 className="text-white text-2xl font-bold mb-4 pb-2 border-b-2 border-cyan-500 inline-block">
                Popular Links
              </h3>
              <ul className="space-y-4 mt-4">
                <li><a href="#" className="flex items-center gap-2 text-md text-gray-300 hover:text-cyan-400 transition font-medium">
                  <span className="text-cyan-500 text-lg"><FiArrowRight /></span> Home
                </a></li>
                <li><a href="#" className="flex items-center gap-2 text-md text-gray-300 hover:text-cyan-400 transition font-medium">
                  <span className="text-cyan-500 text-lg"><FiArrowRight /></span> About Us
                </a></li>
                <li><a href="#" className="flex items-center gap-2 text-md text-gray-300 hover:text-cyan-400 transition font-medium">
                  <span className="text-cyan-500 text-lg"><FiArrowRight /></span> Our Services
                </a></li>
                <li><a href="#" className="flex items-center gap-2 text-md text-gray-300 hover:text-cyan-400 transition font-medium">
                  <span className="text-cyan-500 text-lg"><FiArrowRight /></span> Meet The Team
                </a></li>
                <li><a href="#" className="flex items-center gap-2 text-md text-gray-300 hover:text-cyan-400 transition font-medium">
                  <span className="text-cyan-500 text-lg"><FiArrowRight /></span> Latest Blog
                </a></li>
                <li><a href="#" className="flex items-center gap-2 text-md text-gray-300 hover:text-cyan-400 transition font-medium">
                  <span className="text-cyan-500 text-lg"><FiArrowRight /></span> Contact Us
                </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="border-t border-slate-700 py-8 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-lg text-center sm:text-left text-gray-400">
            © Your Site Name. All Rights Reserved. Designed by{' '}
            <a href="#" className="text-cyan-500 hover:text-cyan-400 transition font-semibold underline">
              Startup
            </a>
          </p>
          
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-cyan-500 rounded flex items-center justify-center text-white hover:bg-cyan-600 transition-all hover:scale-110 font-bold text-lg shrink-0 cursor-pointer"
            aria-label="Back to top"
          >
            <FiArrowRight className="rotate-270" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
