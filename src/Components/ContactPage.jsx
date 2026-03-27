import React from 'react'
import { FiSend, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import ContactForm from './ContactForm'
import LocationMap from './LocationMap'

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
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <FiSend className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-semibold">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a question or want to start a project? We're here to help you succeed
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-gray-600 hover:text-cyan-600 transition">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.content}</p>
                )}
              </div>
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
    </div>
  )
}

export default ContactPage
