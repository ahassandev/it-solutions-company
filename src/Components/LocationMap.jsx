import React from 'react'
import { FiMapPin } from 'react-icons/fi'

function LocationMap() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      <div className="p-6 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <FiMapPin className="w-6 h-6" />
          Our Location
        </h3>
        <p className="text-cyan-50">
          Visit our office for a face-to-face consultation
        </p>
      </div>
      
      {/* Map Placeholder */}
      <div className="relative h-64 bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiMapPin className="w-8 h-8 text-cyan-600" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Startup Headquarters</h4>
            <p className="text-gray-600 mb-4">Adda Athwan Meel, Pakpattan Road, Sahiwal</p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
      
      {/* Office Hours */}
      <div className="p-6 bg-gray-50">
        <h4 className="text-lg font-bold text-slate-900 mb-4">Office Hours</h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Monday - Friday</span>
            <span className="font-semibold text-slate-900">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Saturday</span>
            <span className="font-semibold text-slate-900">10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Sunday</span>
            <span className="font-semibold text-slate-900">Closed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationMap
