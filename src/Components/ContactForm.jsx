import React, { useState } from 'react'
import { FiUser, FiMail, FiPhone, FiBriefcase, FiMessageSquare, FiSend, FiCheckCircle } from 'react-icons/fi'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-green-100 p-12 rounded-2xl text-center">
        <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <FiCheckCircle className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-4">Thank You!</h3>
        <p className="text-green-700 text-lg">
          Your message has been sent successfully. We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
            <FiUser className="w-4 h-4 text-cyan-500" />
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500 transition"
            placeholder="John Doe"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
            <FiMail className="w-4 h-4 text-cyan-500" />
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500 transition"
            placeholder="john@example.com"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
            <FiPhone className="w-4 h-4 text-cyan-500" />
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500 transition"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        {/* Company Field */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
            <FiBriefcase className="w-4 h-4 text-cyan-500" />
            Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500 transition"
            placeholder="Acme Corporation"
          />
        </div>
      </div>

      {/* Subject Field */}
      <div className="mt-6">
        <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
          <FiMessageSquare className="w-4 h-4 text-cyan-500" />
          Subject *
        </label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500 transition"
        >
          <option value="">Select a subject</option>
          <option value="general">General Inquiry</option>
          <option value="support">Technical Support</option>
          <option value="sales">Sales Question</option>
          <option value="partnership">Partnership Opportunity</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message Field */}
      <div className="mt-6">
        <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
          <FiMessageSquare className="w-4 h-4 text-cyan-500" />
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows="6"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500 transition resize-none"
          placeholder="Tell us more about your project or inquiry..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-8 w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-cyan-700 transition duration-300 flex items-center justify-center gap-2 group"
      >
        <FiSend className="w-5 h-5 group-hover:translate-x-1 transition" />
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
