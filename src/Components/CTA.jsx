import React from 'react'

function CTA() {
  return (
    <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-blue-100">
          Join thousands of successful startups using our website platform.
          Start your free trial today - no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA
