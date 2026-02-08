import React from 'react'
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'  

const Team = () => {
    const teamMembers = [
        {
            name: 'Full Name',
            designation: 'Designation',
            image: 'aboutUs.avif'
        },
        {
            name: 'Full Name',
            designation: 'Designation',
            image: 'aboutUs.avif'
        },
        {
            name: 'Full Name',
            designation: 'Designation',
            image: 'aboutUs.avif'
        }
    ]

    return (
        <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-cyan-500 font-semibold text-xl tracking-widest mb-4">OUR TEAM</p>
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">
                        Our Expert Team Members
                    </h2>
                    <div className="flex justify-center mt-7">
                        <div className="w-36 h-1 bg-cyan-500"></div>
                    </div>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teamMembers.map((member, index) => (
                        <div key={index}>
                            
                            <div className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-0">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                                />

                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="flex gap-3">
                                        <a href="#" className="w-12 h-12 bg-cyan-800 flex items-center justify-center text-white t  ext-xl hover:bg-cyan-900 transition rounded">
                                            <FaTwitter />
                                        </a>
                                        <a href="#" className="w-12 h-12 bg-cyan-500 flex items-center justify-center text-white text-xl hover:bg-cyan-600 transition rounded">
                                            <FaFacebookF />
                                        </a>
                                        <a href="#" className="w-12 h-12 bg-cyan-500 flex items-center justify-center text-white text-xl hover:bg-cyan-600 transition rounded">
                                            <FaInstagram />
                                        </a>
                                        <a href="#" className="w-12 h-12 bg-cyan-500 flex items-center justify-center text-white text-xl hover:bg-cyan-600 transition rounded">
                                            <FaLinkedinIn />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-6 text-center rounded-b-lg">
                                <h3 className="text-cyan-500 text-xl font-bold mb-1">{member.name}</h3>
                                <p className="text-gray-600 text-sm font-semibold tracking-wide">{member.designation}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team
