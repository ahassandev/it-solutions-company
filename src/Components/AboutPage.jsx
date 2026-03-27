import React from 'react'
import { FiTarget, FiEye, FiUsers, FiAward, FiSun, FiTrendingUp } from 'react-icons/fi'

function AboutPage() {
  const teamMembers = [
    {
      name: "Ahmad Hassan",
      role: "CEO & Founder",
      image: "/team1.jpg",
      description: "Visionary leader with 10+ years of experience in digital innovation."
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "/team2.jpg", 
      description: "Tech expert specializing in scalable solutions and cloud architecture."
    },
    {
      name: "Michael Chen",
      role: "Lead Designer",
      image: "/team3.jpg",
      description: "Creative mind behind stunning user experiences and brand identities."
    },
    {
      name: "Emily Davis",
      role: "Marketing Director",
      image: "/team4.jpg",
      description: "Growth strategist driving brand awareness and customer engagement."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: FiUsers },
    { number: "1200+", label: "Projects Completed", icon: FiAward },
    { number: "15+", label: "Years Experience", icon: FiTrendingUp },
    { number: "24/7", label: "Support Available", icon: FiSun }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            We are a team of passionate professionals dedicated to transforming businesses through innovative digital solutions
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to revolutionize the digital landscape, we've been at the forefront of innovation for over a decade. Our journey began with a simple mission: to help businesses thrive in the digital age through cutting-edge technology and creative solutions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we're proud to be a trusted partner for hundreds of companies worldwide, delivering exceptional results that drive growth, efficiency, and success. Our team of experts combines technical excellence with creative thinking to solve complex challenges and create lasting value for our clients.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
                  Learn More
                </button>
                <button className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-50 px-8 py-3 rounded-lg font-semibold transition duration-300">
                  Our Portfolio
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/about-image.jpg" 
                alt="About our company" 
                className="rounded-2xl shadow-2xl w-full h-auto"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect fill='%23e2e8f0' width='600' height='400'/%3E%3Ctext fill='%2364748b' font-family='Arial' font-size='24' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EAbout Image%3C/text%3E%3C/svg%3E";
                }}
              />
              <div className="absolute -bottom-6 -right-6 bg-cyan-500 text-white p-6 rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold">15+ Years</h3>
                <p className="text-cyan-50">of Excellence</p>
              </div>
            </div>
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

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by strong values and a clear vision for the future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FiTarget className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create meaningful connections with their customers. We strive to be the catalyst for digital transformation in every industry we serve.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FiEye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in digital innovation, setting new standards for excellence and creativity. We envision a future where technology seamlessly integrates with business to create unprecedented opportunities for growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden group">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect fill='%23e2e8f0' width='300' height='300'/%3E%3Ctext fill='%2364748b' font-family='Arial' font-size='18' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E${member.name}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-cyan-500 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  <div className="flex gap-3 mt-4">
                    <a href="#" className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 hover:bg-cyan-500 hover:text-white transition duration-300">
                      <FiUsers className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 hover:bg-cyan-500 hover:text-white transition duration-300">
                      <FiAward className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create something amazing together. Get in touch with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition duration-300">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition duration-300">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
