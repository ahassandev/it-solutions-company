import React from 'react'
import { FiHeadphones, FiMail, FiMessageSquare, FiClock } from 'react-icons/fi'

function SupportOptions() {
  const supportChannels = [
    {
      icon: FiHeadphones,
      title: "Phone Support",
      description: "Get immediate assistance from our support team",
      contact: "+92 327 1888082",
      availability: "24/7 Available",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FiMail,
      title: "Email Support",
      description: "Send us detailed inquiries and receive prompt responses",
      contact: "support@startup.com",
      availability: "Response within 24 hours",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FiMessageSquare,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      contact: "Available on website",
      availability: "Mon-Fri, 9AM-6PM",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Need Help?</h3>
      <p className="text-gray-600 mb-8">
        Choose the most convenient way to reach our support team. We're here to help you succeed.
      </p>
      
      <div className="space-y-6">
        {supportChannels.map((channel, index) => {
          const IconComponent = channel.icon;
          return (
            <div key={index} className="group">
              <div className={`bg-gradient-to-r ${channel.color} p-6 rounded-2xl text-white hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{channel.title}</h4>
                    <p className="text-white/90 mb-3">{channel.description}</p>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <p className="font-semibold mb-1">{channel.contact}</p>
                      <p className="text-sm text-white/80 flex items-center gap-2">
                        <FiClock className="w-4 h-4" />
                        {channel.availability}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 p-6 bg-cyan-50 rounded-2xl border border-cyan-200">
        <h4 className="text-lg font-bold text-cyan-800 mb-2">Emergency Support</h4>
        <p className="text-cyan-700 mb-4">
          For urgent technical issues, call our emergency hotline for immediate assistance.
        </p>
        <a href="tel:+923271888082" className="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition">
          <FiHeadphones className="w-4 h-4" />
          Emergency Hotline
        </a>
      </div>
    </div>
  )
}

export default SupportOptions
