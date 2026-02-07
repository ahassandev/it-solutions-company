import React from 'react'

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-500 font-bold text-xl tracking-widest mb-3">WHY CHOOSE US</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            We Are Here to Grow Your <br /> Business Exponentially
          </h2>
          <div className="flex justify-center">
            <div className="w-36 h-1 bg-cyan-500"></div>
          </div>
        </div>

        {/* Features Grid with Center Image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

          {/* Left Features */}
          <div className="space-y-12">
            {/* Feature 1 */}
            <div className="text-center lg:text-left">
              <div className="flex lg:justify-start justify-center mb-4">
                <div className="bg-cyan-500 text-white text-3xl p-4 rounded w-fit">👥</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Best In Industry</h3>
              <p className="text-gray-600">
                Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center lg:text-left">
              <div className="flex lg:justify-start justify-center mb-4">
                <div className="bg-cyan-500 text-white text-3xl p-4 rounded w-fit">🏆</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Award Winning</h3>
              <p className="text-gray-600">
                Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <div className="shadow-2xl rounded-lg overflow-hidden w-64">
              <img
                src="/aboutUs.avif"
                alt="Why Choose Us"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-12">
            {/* Feature 3 */}
            <div className="text-center lg:text-left">
              <div className="flex lg:justify-start justify-center mb-4">
                <div className="bg-cyan-500 text-white text-3xl p-4 rounded w-fit">👔</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Staff</h3>
              <p className="text-gray-600">
                Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center lg:text-left">
              <div className="flex lg:justify-start justify-center mb-4">
                <div className="bg-cyan-500 text-white text-3xl p-4 rounded w-fit">☎</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection