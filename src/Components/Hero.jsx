import React from 'react'
import CountUp from 'react-countup'

function Hero() {
  return (
    <>
      <section className="relative h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/HeroImage.jpg')" }}>
        <div className='relative z-10 max-w-7xl mx-auto px-4 text-white'>
          <p className='fontbold text-2xl text-center'>CREATIVE & INNOVATIVE</p>
          <h1 className='text-7xl font-bold mb-4'>Grow Your Business</h1>
          <h1 className='text-7xl text-center font-bold mb-4'>Digital Solution</h1>
          <div className='gap-4 flex justify-center mt-7'>
            <button className="bg-cyan-500 px-9 py-4 text-lg cursor-pointer hover:bg-cyan-600">
              Free Quote
            </button>
            <button className="px-9 py-4 border text-lg cursor-pointer border-white hover:bg-white hover:text-gray-900">
              Contact Us
            </button>
          </div>
        </div>

      </section>

      {/* Stats Cards Overlay - On Top */}
      <div className="relative z-20 -mt-20 px-4 mb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3">
          {/* Card 1 - Teal */}  
          <div className="bg-linear-to-br from-cyan-400 to-cyan-600 p-6 shadow-lg hover:shadow-xl text-white text-center">
            {/* <div className="text-5xl mb-3">👥</div> */}
            <h3 className="text-2xl font-semibold mb-2">Happy Clients</h3>
            <p className="text-4xl font-bold"><CountUp start={1} end={700} duration={2} /></p>
          </div>

          {/* Card 2 - White */}
          <div className="bg-white p-8 shadow-lg hover:shadow-xl text-gray-900 text-center border border-gray-200">
            {/* <div className="text-5xl mb-3">✓</div> */}
            <h3 className="text-2xl font-semibold mb-2">Projects Done</h3>
            <p className="text-4xl font-bold"><CountUp start={1} end={500} duration={2} /></p>
          </div>

          {/* Card 3 - Teal */}
          <div className="bg-linear-to-br from-cyan-400 to-cyan-600  p-8 shadow-lg text-white text-center">
            {/* <div className="text-5xl mb-3">🏆</div> */}
            <h3 className="text-2xl font-semibold mb-2">Win Awards</h3>
            <p className="text-4xl font-bold"><CountUp start={1} end={12345} duration={2} /></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero