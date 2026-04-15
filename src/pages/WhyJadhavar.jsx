import { motion, useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

/* ---------------- COUNTER COMPONENT ---------------- */
const Counter = ({ value, startCount }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (startCount) {
      let start = 0
      const end = parseInt(value.replace(/[^0-9]/g, ''))
      const duration = 2
      const increment = end / (duration * 60)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          clearInterval(timer)
          setCount(end)
        } else {
          setCount(Math.ceil(start))
        }
      }, 16)
    }
  }, [startCount, value])

  return (
    <span>
      {count}
      {value.includes("+") && "+"}
      {value.includes("%") && "%"}
    </span>
  )
}

/* ---------------- MAIN PAGE ---------------- */
const WhyJadhavar = () => {
  const features = [
    {
      icon: '🌍',
      title: 'Globally Recognized Curriculum',
      description: 'Our curriculum is designed to meet international standards while maintaining strong roots in Indian culture and values. Students are prepared for global opportunities.',
      details: ['International accreditation', 'World-class teaching methods', 'Global perspective']
    },
    {
      icon: '🎯',
      title: 'Personalized Learning Approach',
      description: 'Every student is unique. We provide individualized attention and customized learning paths to help each child reach their full potential.',
      details: ['Small class sizes', 'Individual mentoring', 'Customized learning plans']
    },
    {
      icon: '📊',
      title: 'Proven Track Record of Success',
      description: 'Our students consistently excel in academics, sports, and extracurricular activities, with many securing admissions to top universities worldwide.',
      details: ['High academic achievements', 'University placements', 'Alumni success stories']
    },
    {
      icon: '🏫',
      title: 'State-of-the-Art Facilities',
      description: 'Modern infrastructure including well-equipped laboratories, libraries, sports facilities, and technology-enabled classrooms.',
      details: ['Advanced laboratories', 'Digital classrooms', 'Sports complex']
    },
    {
      icon: '👨‍🏫',
      title: 'Experienced Faculty',
      description: 'Our teachers are highly qualified, experienced, and dedicated to nurturing young minds with passion and expertise.',
      details: ['Qualified educators', 'Continuous training', 'Student-focused approach']
    },
    {
      icon: '🤝',
      title: 'Holistic Development',
      description: 'We focus on the complete development of students - academic excellence, character building, and life skills.',
      details: ['Academic excellence', 'Character building', 'Life skills training']
    },
  ]

  /* --- NEW: SECTION REF FOR COUNTER TRIGGER --- */
  const statRef = useRef(null)
  const statInView = useInView(statRef, { once: true })

  return (
    <div className="pt-20">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Discover the Jadhavar Difference
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Experience excellence in education with our comprehensive programs, world-class facilities, and dedicated faculty
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="text-primary mr-2">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Our Achievements</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '1000+', label: 'Students' },
              { number: '50+', label: 'Faculty Members' },
              { number: '95%', label: 'Pass Rate' },
              { number: '15+', label: 'Years of Excellence' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-primary mb-2">
                  <Counter value={stat.number} startCount={statInView} />
                </div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">What Parents Say</h2>
            <p className="text-xl text-gray-600">Hear from our community</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Jadhavar has provided an excellent foundation for my child. The personalized attention and quality education are remarkable.',
                author: 'Parent of Class V Student',
                name: 'Mrs. Sharma'
              },
              {
                quote: 'The school combines traditional values with modern teaching methods. My daughter has grown into a confident and well-rounded individual.',
                author: 'Parent of Class VI Student',
                name: 'Mr. Patel'
              },
              {
                quote: 'Outstanding facilities and dedicated teachers. The holistic approach to education is what sets Jadhavar apart.',
                author: 'Parent of Class VIII Student',
                name: 'Mrs. Desai'
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-gray-700 mb-4 italic">{testimonial.quote}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default WhyJadhavar
