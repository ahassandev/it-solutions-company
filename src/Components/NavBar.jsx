import React, { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi'

function NavBar() {
  const [open, setOpen] = useState(false)
  const socialLinks = [
    { label: "Twitter", href: "#", icon: FiTwitter },
    { label: "Facebook", href: "#", icon: FiFacebook },
    { label: "LinkedIn", href: "#", icon: FiLinkedin },
    { label: "Instagram", href: "#", icon: FiInstagram },
    { label: "YouTube", href: "#", icon: FiYoutube },
  ];


  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 py-2 px-8 text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-2">
              <FiPhone className="text-white" />
              <span>+92 327 1888082</span>
            </div>

            <div className="flex items-center gap-2">
              <FiMail className="text-white" />
              <span>ahassandevx@gmail.com</span>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <FiMapPin className="text-white" />
              <span>Kot Khadim Ali Shah Sahiwal</span>
            </div>
          </div>
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  title={social.label}
                  className="w-8 h-8 rounded-full border border-white 
                   flex items-center justify-center text-white
                   hover:bg-white hover:text-black hover:border-white 
                   transition duration-300"
                >
                  <Icon className="w-4 h-4 " />
                </a>
              );
            })}
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-500 shadow-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          
            <a href="/" className="text-white font-bold text-2xl tracking-tight hover:text-cyan-400 transition">
              Startup
            </a>

            
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            
            <ul className={`hidden lg:flex gap-8 items-center text-white font-semibold`}>
              <li><a href="#" className="hover:text-cyan-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">About</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Service</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Pages</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Elements</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
            </ul>

            
            <a
              href="#"
              className="hidden lg:inline-block bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-5 py-2 rounded-lg font-bold transition duration-300 tracking-wide"
            >
              Purchase Now
            </a>
          </div>

          
          {open && (
            <div className="lg:hidden bg-slate-800 px-4 py-4 border-t border-blue-700">
              <ul className="flex flex-col gap-3">
                <li><a href="#" className="block text-white hover:text-cyan-400 transition py-2">Home</a></li>
                <li><a href="#" className="block text-white hover:text-cyan-400 transition py-2">About</a></li>
                <li><a href="#" className="block text-white hover:text-cyan-400 transition py-2">Service</a></li>
                <li><a href="#" className="block text-white hover:text-cyan-400 transition py-2">Pages</a></li>
                <li><a href="#" className="block text-white hover:text-cyan-400 transition py-2">Elements</a></li>
                <li><a href="#" className="block text-white hover:text-cyan-400 transition py-2">Contact</a></li>
                <li><a href="#" className="block bg-cyan-500 text-slate-900 px-4 py-2 rounded font-bold mt-2 text-center hover:bg-cyan-600 transition">Purchase Now</a></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default NavBar