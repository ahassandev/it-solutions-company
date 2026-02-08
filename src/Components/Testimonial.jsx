import React, { useState, useEffect } from 'react'

const Testimonial = () => {
  const testimonials = [
    { name: 'Client One', role: 'Profession', image: 'testimonial-02.png', text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam' },
    { name: 'Client Two', role: 'Profession', image: 'testimonial-02.png', text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam' },
    { name: 'Client Three', role: 'Profession', image: 'testimonial-02.png', text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam' },
    { name: 'Client Four', role: 'Profession', image: 'testimonial-02.png', text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam' }
    
  ]

  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(3)

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth
      if (w >= 1024) setVisible(3)
      else if (w >= 768) setVisible(2)
      else setVisible(1)
      setCurrent(c => Math.min(c, Math.max(0, testimonials.length - (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1))))
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])

  const n = testimonials.length
  const maxStart = Math.max(0, n - visible)

  const prev = () => setCurrent(c => (c - 1 < 0 ? maxStart : c - 1))
  const next = () => setCurrent(c => (c + 1 > maxStart ? 0 : c + 1))


  const starts = Array.from({ length: maxStart + 1 }, (_, i) => i)

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-cyan-500 font-bold text-xl tracking-widest mb-3">TESTIMONIAL</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What Our Clients Say About
            <br /> Our Digital Services
          </h2>
          <div className="flex justify-center mt-4">
            <div className="w-24 h-1 bg-cyan-500"></div>
          </div>
        </div>


        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(current * 100) / visible}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className={`flex-none px-3 ${visible === 3 ? 'w-1/3' : visible === 2 ? 'w-1/2' : 'w-full'}`}>
                <div className={`rounded-lg overflow-hidden ${i === current ? 'bg-white shadow-2xl' : 'bg-cyan-50 shadow-lg'}`}>
                  <div className="flex items-center gap-4 p-6 border-b border-gray-200">
                    <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                    <div>
                      <h3 className={`font-semibold ${i === current ? 'text-cyan-500' : 'text-cyan-600'}`}>{t.name}</h3>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  <div className="p-6 text-gray-600 leading-relaxed">{t.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-3 mt-6">
          {starts.map(i => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${i === current ? 'bg-cyan-500' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button onClick={prev} className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">Prev</button>
          <button onClick={next} className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600">Next</button>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
