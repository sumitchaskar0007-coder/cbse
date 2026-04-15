import { motion } from 'framer-motion'
import React from 'react'

const Curriculum = () => {
  const programs = [
    {
      name: 'Early Years Programme (EYP)',
      grade: 'Nursery - KG',
      description:
        "A nurturing foundation that focuses on play-based learning, social skills, and early literacy. Our EYP program creates a safe and stimulating environment for young learners.",
      focus: [
        'Play-based learning',
        'Social & emotional development',
        'Early literacy & numeracy',
        'Creative expression'
      ],
      // public path (no import)
      img: '/curiculum/kids27.jpg'
    },
    {
      name: 'Primary Years Programme (PYP)',
      grade: 'Class I - V',
      description:
        'Building strong academic foundations through inquiry-based learning. Students develop critical thinking, communication skills, and a love for learning.',
      focus: [
        'Inquiry-based learning',
        'Core subjects mastery',
        'Critical thinking',
        'Communication skills'
      ],
      img: '/curiculum/2327605.jpg'
    },
    {
      name: 'Middle Years Programme (MYP)',
      grade: 'Class VI - VIII',
      description:
        'Comprehensive curriculum preparing students for board examinations while developing analytical skills, research capabilities, and independent thinking.',
      focus: [
        'Board exam preparation',
        'Analytical thinking',
        'Research skills',
        'Subject specialization'
      ],
      img: '/curiculum/appdeveloper_3.jpg'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            A Curriculum Tailored for Your Child's Success
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            From early years to senior secondary, our comprehensive programs are designed to nurture every aspect of your child's development
          </motion.p>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Text */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-primary mb-2">{program.name}</h2>
                  <p className="text-xl text-gray-600 mb-4">{program.grade}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>

                  <div>
                    <h3 className="font-semibold text-primary mb-3">Key Focus Areas:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {program.focus.map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <span className="text-primary mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1 bg-gray-50 p-8 rounded-xl">
                  <div className="aspect-video bg-white rounded-lg flex items-center justify-center shadow-md">
                    <img
                      src={program.img}
                      alt={program.name}
                      className="w-3/4 h-auto object-contain drop-shadow-xl"
                      onError={(e) => {
                        // fallback: hide image if not found
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Curriculum Highlights</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Holistic Development', description: 'Academic, physical, and emotional growth' },
              { title: 'Technology Integration', description: 'Digital tools and modern learning platforms' },
              { title: 'Assessment & Evaluation', description: 'Continuous and comprehensive assessment' },
              { title: 'Extracurricular Activities', description: 'Sports, arts, and cultural programs' }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Curriculum
