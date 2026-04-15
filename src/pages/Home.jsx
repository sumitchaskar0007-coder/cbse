import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ImageSlider from '../components/ImageSlider'
// import Reviews from '../components/Reviews'

const Home = () => {
  const [showAdmissionPopup, setShowAdmissionPopup] = useState(false)

  useEffect(() => {
    setShowAdmissionPopup(true)
  }, [])

  const openAdmissionPopup = () => setShowAdmissionPopup(true)
  const closeAdmissionPopup = () => setShowAdmissionPopup(false)

  // ===============================
  // NEW: ADMISSION SECTION COMPONENT
  // ===============================
  const AdmissionSection = () => {
    const imageSrc = "/images/admisson.jpeg";

    const steps = [
      {
        id: 1,
        title: "Counsellor Interaction",
        description:
          "Book an exclusive online counselling session with one of our experts and discover vital facts about our institute.",
      },
      {
        id: 2,
        title: "Collect Prospectus & Brochure",
        description:
          "Following this, get our school prospectus and brochure to understand the educational facilities we offer for your child.",
      },
      {
        id: 3,
        title: "Document Submission",
        description:
          "E-mail the admission form and the necessary documents mentioned on our form for an effective & smooth onboarding process.",
      },
      {
        id: 4,
        title: "Child Skill Assessment Session",
        description:
          "Ensure to get your child enrolled for our Child Skill Assessment Session which will help us understand your child's unique requirements & needs.",
      },
    ];

    return (
      <section className="w-full bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={imageSrc}
              alt="Classroom interaction"
              className="w-full h-auto rounded-r-3xl object-cover shadow-lg"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-4xl font-extrabold text-gray-900 mb-4">
                Admission <span className="text-blue-500">Open</span>
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                We understand the importance of convenience and comfort; hence we have
                kept our school admission process simple. Follow the steps below to get
                your child enrolled in Jadhavar International School.
              </p>

              <Link
                to="/admissions"
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-full shadow hover:bg-blue-600"
              >
                Enroll Now
              </Link>
            </motion.div>

            {/* STEPS */}
            <div className="mt-4">
              <div className="flex gap-4 overflow-x-auto pb-4 md:overflow-visible md:flex-wrap">
                {steps.map((s) => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="min-w-[260px] md:w-60 bg-blue-600 text-white rounded-2xl p-5 shadow-md border-t-4 border-blue-700"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold">{s.title}</h4>
                      <div className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold">
                        {String(s.id).padStart(2, "0")}
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-white/90">
                      {s.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>

        <div className="mt-10 border-t border-gray-100" />
      </section>
    );
  };
  // ===============================
  // END NEW COMPONENT
  // ===============================

  return (
    <div>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/bg_jadhavar.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
        </div>

        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Unlock a World of Opportunities
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-light">
              Give Your Child the Best Education
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Let your child thrive in a nurturing environment that combines traditional values with modern learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions" className="btn-primary text-lg">
                Apply Now
              </Link>
              <Link to="/curriculum" className="btn-secondary text-lg">
                Explore Curriculum
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* IMAGE SLIDER */}
      <ImageSlider />

      {/* NEW ADMISSION SECTION HERE */}
      <AdmissionSection />

      {/* POPUP (unchanged) */}
      {showAdmissionPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeAdmissionPopup}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl max-w-md w-[90%] p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeAdmissionPopup}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">Join Jadhavar International School</h2>

              <div className="w-full rounded-xl mb-6 bg-primary bg-opacity-10 py-8 px-4 flex items-center justify-center">
                <p className="text-primary text-lg font-semibold">Admission Only</p>
              </div>

              <p className="text-gray-600 text-base mb-6">
                Give your child the opportunity to excel in a world-class educational environment.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/admissions"
                  onClick={closeAdmissionPopup}
                  className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg"
                >
                  Apply on Admission
                </Link>

                <button
                  onClick={closeAdmissionPopup}
                  className="px-6 py-2 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* -------- FEATURES SECTION -------- */}
      {/* (Your features section unchanged… keeping original) */}

      {/* -------- PROGRAMS -------- */}
      {/* (Your programs section unchanged…) */}

      {/* REVIEWS SECTION */}
      {/* <Reviews /> */}

      {/* CTA SECTION */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Invest in Your Child's Future
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Experience the Excellence of Jadhavar International School
            </p>
            <Link to="/admissions" className="btn-secondary text-lg">
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Home
