import { useState } from 'react'
import { motion } from 'framer-motion'

const InfoCenter = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What is the admission process?',
      answer: 'The admission process involves four simple steps: 1) Inquiry - Fill out the inquiry form or visit our campus, 2) Application - Submit required documents and application form, 3) Assessment - Student assessment and interaction session, 4) Confirmation - Receive admission confirmation and complete enrollment. Our admissions team will guide you through each step.'
    },
    {
      question: 'Are there extracurricular activities available?',
      answer: 'Yes, we offer a wide range of extracurricular activities including sports (cricket, football, basketball, swimming), cultural activities (music, dance, drama, art), debate and elocution, and various clubs. These activities are an integral part of our holistic education approach.'
    },
    {
      question: 'What is the student-teacher ratio?',
      answer: 'We maintain an optimal student-teacher ratio to ensure personalized attention. Our average class size is 25-30 students, with smaller groups for specialized subjects and activities. This allows our teachers to focus on individual student needs and learning styles.'
    },
    {
      question: 'What curriculum does the school follow?',
      answer: 'We follow a comprehensive curriculum that includes Early Years Programme (Nursery-KG), Primary Years Programme (Class I-V), Middle Years Programme (Class VI-X), and International Baccalaureate Diploma Programme (Class XI-XII). Our curriculum combines traditional values with modern educational practices.'
    },
    {
      question: 'Are boarding facilities available?',
      answer: 'Yes, we offer both boarding and day school options. Our residential facilities include comfortable accommodation, nutritious meals, study halls, recreation areas, and 24/7 medical care. The boarding program provides a home-like environment with proper supervision and support.'
    },
    {
      question: 'What are the school timings?',
      answer: 'Regular school hours are from 8:00 AM to 3:30 PM. After-school activities and sports practice continue until 5:00 PM. Boarding students have structured schedules that include study time, meals, and recreational activities.'
    },
    {
      question: 'How do you prepare students for competitive exams?',
      answer: 'We provide specialized coaching for competitive examinations like JEE, NEET, and other entrance tests. This includes regular mock tests, performance analysis, and personalized guidance. Our experienced faculty ensures students are well-prepared for both board exams and competitive tests.'
    },
    {
      question: 'What facilities are available on campus?',
      answer: 'Our campus features state-of-the-art facilities including advanced laboratories (Physics, Chemistry, Biology, Computer Science), a well-stocked library, modern classrooms with digital boards, sports complex with swimming pool, auditorium, dining facilities, and medical care center.'
    },
    {
      question: 'Is transportation available?',
      answer: 'Yes, we provide safe and reliable school bus transportation services covering various routes. The buses are well-maintained, equipped with safety features, and supervised by trained staff. Please contact our transport office for route details and availability.'
    },
    {
      question: 'What is the fee structure?',
      answer: 'Our fee structure varies by grade level and program. It includes tuition fees, development fees, and optional charges for boarding, transportation, and special programs. We offer flexible payment plans and scholarships for deserving students. Please contact our admissions office for detailed fee information.'
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            Info Center
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Find answers to commonly asked questions and important information about our school
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about Jadhavar International School</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg text-gray-800 pr-4">{faq.question}</span>
                  <motion.svg
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 text-primary flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-gray-50 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}

    </div>
  )
}

export default InfoCenter









