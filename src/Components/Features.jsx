import React from 'react'

function Features() {
  const features = [
    { icon: '📱', title: 'Fully Responsive', description: 'Works perfectly on all devices and screen sizes' },
    { icon: '⚙️', title: 'Highly Customizable', description: 'Easy to customize and modify according to your needs' },
    { icon: '🎨', title: 'Modern Design', description: 'Clean, professional, and modern UI design' },
    { icon: '⚡', title: 'High Performance', description: 'Optimized for fast loading and smooth experience' },
    { icon: '🔧', title: 'Developer Friendly', description: 'Clean code structure with proper documentation' },
    { icon: '🎯', title: '18+ Demo Pages', description: 'Multiple pre-built pages ready to use' },
  ]

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Features & Benefits
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to build a successful startup website
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
