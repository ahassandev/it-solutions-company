import React from 'react'
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiUser, FiMessageSquare, FiBriefcase, FiHeadphones } from 'react-icons/fi'

function ContactInfo({ icon, title, content, link }) {
  const IconComponent = icon;
  
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-cyan-200 group">
      <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
        <IconComponent className="w-7 h-7 text-cyan-600" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      {link ? (
        <a href={link} className="text-gray-600 hover:text-cyan-600 transition">
          {content}
        </a>
      ) : (
        <p className="text-gray-600">{content}</p>
      )}
    </div>
  )
}

export default ContactInfo
