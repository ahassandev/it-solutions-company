import React from 'react'

const WorkProcess = () => {
  const steps = [
    {
      icon: '🔍',
      title: 'Research',
      description: 'Eos vero dolore eirmod diam duo lorem magna sit sea dolore sanctus sed et'
    },
    {
      icon: '👥',
      title: 'Concept',
      description: 'Eos vero dolore eirmod diam duo lorem magna sit sea dolore sanctus sed et'
    },
    {
      icon: '</>',
      title: 'Development',
      description: 'Eos vero dolore eirmod diam duo lorem magna sit sea dolore sanctus sed et'
    },
    {
      icon: '✓',
      title: 'Finalization',
      description: 'Eos vero dolore eirmod diam duo lorem magna sit sea dolore sanctus sed et'
    }
  ]

  return (
    <section className="py-20 px-5 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="text-center mb-16">
          <p className="text-cyan-500 font-semibold text-xl tracking-widest mb-4">WORK PROCESS</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Step By Step Simple & Clean<br/>Working Process
          </h2>
          <div className="flex justify-center mt-8">
            <div className="w-36 h-1 bg-cyan-500"></div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                
                <div className="flex justify-center mb-6">
                  <div className="bg-cyan-500 text-white text-4xl p-4 rounded w-fit">
                    {step.icon}
                  </div>
                </div>

                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>

                
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkProcess
