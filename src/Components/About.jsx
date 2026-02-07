import React from 'react'

function About() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        
        <div>
        
          <p className="text-cyan-500 font-bold text-xl tracking-widest mb-3">ABOUT US</p>
          

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            The Best IT Solution With 10 Years of Experience
          </h2>
          
          
          <div className="w-36 h-1 bg-cyan-500 mb-8"></div>
          

          <p className="text-gray-600 mb-10 leading-relaxed">
            Tempor erat elir rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet
          </p>
          

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-cyan-500 text-2xl">✓</span>
              <span className="text-gray-800 text-xl">Award Winning</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-cyan-500 text-2xl">✓</span>
              <span className="text-gray-800 text-xl">24/7 Support</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-cyan-500 text-2xl">✓</span>
              <span className="text-gray-800 text-xl">Professional Staff</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-cyan-500 text-xl">✓</span>
              <span className="text-gray-800 text-xl">Fair Prices</span>
            </div>
          </div>    
          
          
          <div className="flex items-center gap-4 mb-8 bg-gray-50 p-4 rounded-lg">
            <div className="bg-cyan-500 text-white p-4 rounded text-2xl">☎</div>
            <div>
              <p className="text-gray-900 text-xl mb-2">Call to ask any question</p>
              <p className="text-cyan-500 font-semibold text-2xl">+012 345 6789</p>
            </div>
          </div>
          
          
          <button className="bg-cyan-500 text-white px-8 py-5 font-semibold hover:bg-cyan-600 transition">
            Request A Quote
          </button>
        </div>

        
        <div className="hidden lg:flex justify-center items-center">
          <div className="shadow-2xl rounded-lg overflow-hidden">
            <img 
              src="/aboutUs.avif" 
              alt="About Us" 
              className="w-96 h-auto object-cover rounded-lg"
            />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default About