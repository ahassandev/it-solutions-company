import React from 'react'

function Services() {
  const services = [
    {
      title: 'Web Design',
      description: 'Beautiful and modern website designs tailored to your brand identity and business goals.',
      icon: '🎨'
    },
    {
      title: 'Web Development',
      description: 'Responsive and feature-rich websites built with the latest technologies and best practices.',
      icon: '💻'
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your online visibility with our comprehensive SEO optimization strategies.',
      icon: '🔍'
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      icon: '📱'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      icon: '🛍️'
    },
    {
      title: 'Support & Maintenance',
      description: '24/7 support and regular maintenance to keep your website running smoothly.',
      icon: '🛠️'
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-cyan-500 mb-4">
            Our Services
          </h2>
          <h2 className="text-4xl font-bold text-gray-800">Custom IT Solutions for your <br /> Successful Business</h2>
          <div className="flex justify-center mt-7">
            <div className="w-36 h-1 bg-cyan-500"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 p-8 rounded-lg hover:shadow-xl transition bg-blue-100"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 transition">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
