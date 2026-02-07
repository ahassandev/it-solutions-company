import React from 'react'

const Pricing = () => {
  const plans = [
    {
      name: 'Basic Plan',
      subtitle: 'FOR SMALL SIZE BUSINESS',
      price: 49,
      features: [
        { name: 'HTML5 & CSS3', included: true },
        { name: 'Bootstrap v5', included: true },
        { name: 'Responsive Layout', included: false }
      ]
    },
    {
      name: 'Standard Plan',
      subtitle: 'FOR MEDIUM SIZE BUSINESS',
      price: 99,
      features: [
        { name: 'HTML5 & CSS3', included: true },
        { name: 'Bootstrap v5', included: true },
        { name: 'Responsive Layout', included: true }
      ],
      featured: true
    },
    {
      name: 'Advanced Plan',
      subtitle: 'FOR LARGE SIZE BUSINESS',
      price: 149,
      features: [
        { name: 'HTML5 & CSS3', included: true },
        { name: 'Bootstrap v5', included: true },
        { name: 'Responsive Layout', included: true }
      ]
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        
        <div className="text-center mb-16">
          <p className="text-cyan-500 font-bold text-xl tracking-widest mb-4">PRICING PLANS</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            We are Offering Competitive<br/>Prices for Our Clients
          </h2>
          <div className="flex justify-center mt-6">
            <div className="w-36 h-1 bg-cyan-500"></div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden transition-all duration-300 ${
                plan.featured 
                  ? 'md:scale-105 shadow-2xl ring-2 ring-cyan-500' 
                  : 'shadow-lg hover:shadow-xl'
              } ${plan.featured ? 'bg-cyan-50' : 'bg-white'}`}
            >
              
              <div className="bg-blue-50 p-8 text-center border-b border-gray-200">
                <h3 className="text-cyan-500 text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-xs tracking-widest font-semibold mb-6">{plan.subtitle}</p>
                
                
                <div className="mb-2">
                  <span className="text-gray-900 text-5xl font-bold">${plan.price}</span>
                  <span className="text-gray-600 text-lg">/Month</span>
                </div>
              </div>

              
              <div className="p-8">
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <span className={`text-2xl ${feature.included ? 'text-cyan-500' : 'text-red-500'}`}>
                        {feature.included ? '✓' : '✕'}
                      </span>
                      <span className="text-gray-700">{feature.name}</span>
                    </div>
                  ))}
                </div>

                <button className='mt-8 w-full bg-cyan-500 text-white py-3 font-semibold hover:bg-cyan-600 transition'>
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
