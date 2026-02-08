import React, { useState } from 'react'

function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)

    setFormData({ name: '', email: '', service: '', message: '' })
  }

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        

        <div>
          <p className="text-cyan-500 font-bold text-xl tracking-widest mb-3">REQUEST A QUOTE</p>
          
          <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
            Need A Free Quote? Please Feel Free to Contact Us
          </h2>
          

          <div className="w-20 h-1 bg-cyan-500 mb-8"></div>
          

          <div className="space-y-5 mb-8">
            <div className="flex items-center gap-4">
              <span className="text-cyan-500 text-3xl">↩</span>
              <h3 className="text-lg font-semibold text-gray-900">Reply within 24 hours</h3>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-cyan-500 text-3xl">☎</span>
              <h3 className="text-lg font-semibold text-gray-900">24 hrs telephone support</h3>
            </div>
          </div>
          

          <p className="text-gray-600 mb-8 leading-relaxed">
            Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.
          </p>
          

          <div className="flex items-center gap-4 bg-cyan-500 text-white p-6 rounded-lg w-fit">
            <span className="text-3xl">☎</span>
            <div>
              <p className="text-sm font-semibold">Call to ask any question</p>
              <p className="text-2xl font-bold">+012 345 6789</p>
            </div>
          </div>
        </div>

        
          <div className="bg-cyan-500 p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            
            
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            
            
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <option value="">Select A Service</option>
              <option value="web-design">Web Design</option>
              <option value="web-development">Web Development</option>
              <option value="seo">SEO Optimization</option>
              <option value="app-development">App Development</option>
            </select>
            

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
            ></textarea>
            

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 px-6 rounded font-semibold hover:bg-gray-800 transition duration-300"
            >
              Request A Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CTA

