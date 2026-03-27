import React from 'react'

function ProcessStep({ step, index, totalSteps }) {
  return (
    <div className="relative group">
      {/* Connector Line */}
      {index < totalSteps - 1 && (
        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-transparent -translate-x-1/2"></div>
      )}
      
      <div className="text-center">
        {/* Step Number */}
        <div className="relative inline-block mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition duration-300">
            {index + 1}
          </div>
          <div className="absolute inset-0 bg-cyan-500 rounded-full animate-ping opacity-20"></div>
        </div>
        
        {/* Step Content */}
        <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
        <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">{step.description}</p>
      </div>
    </div>
  )
}

export default ProcessStep
