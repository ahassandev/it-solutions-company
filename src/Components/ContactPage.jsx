import React from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiHeadphones, FiMessageSquare, FiClock, FiCheckCircle, FiNavigation } from 'react-icons/fi'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import LocationMap from './LocationMap'
import SupportOptions from './SupportOptions'

function ContactPage() {
  const contactInfo = [
    {
      icon: FiMapPin,
      title: "Office Address",
      content: "Adda Athwan Meel, Pakpattan Road, Sahiwal",
      link: "https://maps.google.com"
    },
    {
      icon: FiPhone,
      title: "Phone Number",
      content: "+92 327 1888082",
      link: "tel:+923271888082"
    },
    {
      icon: FiMail,
      title: "Email Address",
      content: "ahassandevx@gmail.com",
      link: "mailto:ahassandevx@gmail.com"
    },
    {
      icon: FiClock,
      title: "Business Hours",
      content: "Mon-Fri: 9:00 AM - 6:00 PM"
    }
  ];

  const faqs = [
    {
      question: "How quickly can I expect a response?",
      answer: "We typically respond to emails within 24 hours and phone calls immediately during business hours. For urgent matters, our emergency hotline is available 24/7."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We offer a free 30-minute consultation to discuss your project requirements and how we can help you achieve your goals."
    },
    {
      question: "What services do you provide?",
      answer: "We provide comprehensive IT solutions including web development, mobile apps, SEO, digital marketing, cloud services, and cybersecurity solutions."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! We work with clients globally and have experience managing projects across different time zones and cultures."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <FiSend className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-semibold">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Have a question or want to start a project? We're here to help you succeed
          </p>
          
          {/* Quick Contact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">1hr</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">500+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">100%</div>
              <div className="text-gray-300">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient way to reach us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
            
            {/* Location Map */}
            <div>
              <LocationMap />
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SupportOptions />
            </div>
            
            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Still have questions? We're here to help!
                </p>
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
                  View All FAQs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
          <p className="text-xl mb-8 text-cyan-50">
            Follow us on social media for updates, tips, and industry insights
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <a href="#" className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/30 transition">
              <span className="text-xl">f</span>
            </a>
            <a href="#" className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/30 transition">
              <span className="text-xl">t</span>
            </a>
            <a href="#" className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/30 transition">
              <span className="text-xl">in</span>
            </a>
            <a href="#" className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/30 transition">
              <span className="text-xl">ig</span>
            </a>
            <a href="#" className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/30 transition">
              <span className="text-xl">yt</span>
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-cyan-50 mb-6">
              Get the latest updates, tips, and exclusive content delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
