import React from 'react'
import ServiceIcon from './ServiceIcon'

function ServiceCard({ service, index }) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-cyan-200">
      <div className="relative overflow-hidden h-2 bg-gradient-to-r from-cyan-500 to-cyan-600"></div>
      
      <div className="p-8">
        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
          <ServiceIcon icon={service.icon} className="text-cyan-600" />
        </div>
        
        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition duration-300">
          {service.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-6">
          {service.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-cyan-500 font-semibold">
            {service.price ? service.price : 'Contact for pricing'}
          </span>
          <button className="text-cyan-600 hover:text-cyan-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
            Learn More 
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
