import React from 'react'
import { FiCheck, FiArrowRight } from 'react-icons/fi'

function PricingCard({ plan, featured = false }) {
  return (
    <div className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
      featured ? 'ring-2 ring-cyan-500 scale-105' : 'border border-gray-200'
    }`}>
      {featured && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
          Most Popular
        </div>
      )}
      
      <div className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
          <div className="text-4xl font-bold text-cyan-600 mb-2">
            ${plan.price}
            {plan.period && <span className="text-lg text-gray-500">/{plan.period}</span>}
          </div>
          <p className="text-gray-600">{plan.description}</p>
        </div>
        
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <FiCheck className="w-3 h-3 text-cyan-600" />
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button className={`w-full py-3 px-6 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2 ${
          featured 
            ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-600 hover:to-cyan-700' 
            : 'bg-gray-100 text-slate-900 hover:bg-gray-200'
        }`}>
          Get Started
          <FiArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default PricingCard
