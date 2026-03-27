import React from 'react'
import { FiTarget, FiUsers, FiAward, FiClock, FiHeadphones, FiSend } from 'react-icons/fi'
import ServiceCard from './ServiceCard'
import ProcessStep from './ProcessStep'
import PricingCard from './PricingCard'

function ServicesPage() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies. Responsive, fast, and scalable solutions tailored to your business needs.',
      icon: 'code',
      price: 'Starting at $999'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. Engaging user experiences with seamless performance.',
      icon: 'smartphone',
      price: 'Starting at $1,999'
    },
    {
      title: 'SEO & Digital Marketing',
      description: 'Comprehensive SEO strategies and digital marketing solutions to boost your online presence and drive organic growth.',
      icon: 'search',
      price: 'Starting at $499/month'
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms with secure payment integration, inventory management, and exceptional user experiences.',
      icon: 'shopping-cart',
      price: 'Starting at $2,499'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive designs that captivate users and enhance brand identity. User-centered design approach.',
      icon: 'palette',
      price: 'Starting at $799'
    },
    {
      title: 'Cloud Services',
      description: 'Cloud migration, deployment, and management solutions. Scalable infrastructure with optimal performance and security.',
      icon: 'cloud',
      price: 'Starting at $299/month'
    },
    {
      title: 'Database Management',
      description: 'Efficient database design, optimization, and management solutions. Secure and scalable data architecture.',
      icon: 'database',
      price: 'Starting at $599'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets. Risk assessment, monitoring, and threat prevention.',
      icon: 'shield',
      price: 'Starting at $899/month'
    }
  ];

  const processSteps = [
    {
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project roadmap tailored to your goals.'
    },
    {
      title: 'Design & Prototyping',
      description: 'Our team creates stunning designs and interactive prototypes for your approval.'
    },
    {
      title: 'Development & Testing',
      description: 'We build your solution using agile methodologies with rigorous testing at every stage.'
    },
    {
      title: 'Deployment & Support',
      description: 'Smooth deployment followed by ongoing support and maintenance to ensure success.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '99',
      period: 'month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 projects',
        'Basic support',
        '1GB storage',
        'Email support',
        'Basic analytics'
      ]
    },
    {
      name: 'Professional',
      price: '299',
      period: 'month',
      description: 'Ideal for growing businesses',
      features: [
        'Unlimited projects',
        'Priority support',
        '10GB storage',
        '24/7 phone support',
        'Advanced analytics',
        'Custom integrations'
      ]
    },
    {
      name: 'Enterprise',
      price: '799',
      period: 'month',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Unlimited everything',
        'Dedicated support team',
        'Unlimited storage',
        'Custom solutions',
        'White-label options',
        'SLA guarantee',
        'On-premise deployment'
      ]
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: FiAward },
    { number: '98%', label: 'Client Satisfaction', icon: FiUsers },
    { number: '24/7', label: 'Support Available', icon: FiHeadphones },
    { number: '48h', label: 'Average Response Time', icon: FiClock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <FiSend className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-semibold">Our Services</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Professional IT Solutions</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            We deliver cutting-edge technology solutions that drive business growth and digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition duration-300">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center text-white">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                  <p className="text-cyan-50">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet your specific business needs
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures project success and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {processSteps.map((step, index) => (
              <ProcessStep 
                key={index} 
                step={step} 
                index={index} 
                totalSteps={processSteps.length} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Pricing Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard 
                key={index} 
                plan={plan} 
                featured={index === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition duration-300">
              Schedule a Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition duration-300">
              Request a Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
