import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, Link } from 'react-router-dom'

// Videos data
const videos = [
  {
    title: "Teachers' Day Message – 2025",
    description: "A special message from our faculty",
    videoUrl: "https://www.youtube.com/embed/a6XXlVVKfPs", // Replace with actual YouTube video ID
    thumbnail: "/images/thumbnail/tech.jpeg"
  },
  {
    title: "10th Commemoration Day",
    description: "Celebrating our milestones",
    videoUrl: "https://www.youtube.com/embed/rFlcCSQ_eBs", // Replace with actual YouTube video ID
    thumbnail: "/images/thumbnail/parent.jpeg"
  },

  {
    title: "Annual Fest (Spandan) Interview",
    description: "Highlights from our annual festival",
    videoUrl: "https://www.youtube.com/embed/VazB1_fDxVU", // Replace with actual YouTube video ID
    thumbnail: "/images/thumbnail/exam_prepare.jpeg"
  },
]

// (Gallery images moved to Gallery.jsx)

const About = () => {
  const location = useLocation()
  const [openSections, setOpenSections] = useState({
    foundersMessage: false,
    missionCredo: false,
    management: false,
    chairperson: false,
    awards: false,
    achievements: false,
    testimonials: false,
    nabet: false,
    schoolTour: false,
  })
  const [openVideoModal, setOpenVideoModal] = useState(null)

  // Convert kebab-case to camelCase
  const kebabToCamel = (str) => {
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
  }

  // Scroll to section when hash changes
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1)
      const camelCaseId = kebabToCamel(sectionId)

      // Auto-expand the section first
      setOpenSections((prev) => ({
        ...prev,
        [camelCaseId]: true,
      }))

      // Then scroll to the section
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const offset = 100 // Account for fixed navbar
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 300) // Wait for accordion to expand
    }
  }, [location.hash])

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const AccordionSection = ({ id, title, children, isOpen, onToggle }) => {
    return (
      <div id={id} className="mb-6 border border-gray-200 rounded-lg overflow-hidden shadow-md">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
        >
          <h3 className="text-xl font-bold text-primary">{title}</h3>
          <div className="flex items-center space-x-2">
            {isOpen ? (
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            )}
          </div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 py-4 bg-white">{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
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
            Founder's Message
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-4xl mx-auto opacity-90 mb-16"
          >
            Leadership that inspires excellence, values, and a vision for future generations.
          </motion.p>

          {/* Flex Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-12"
          >
            {/* PRESIDENT – DR. SUDHAKARRAO JADHAVAR */}
            <div className="bg-white text-black p-8 rounded-2xl shadow-xl">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg mb-4">
                  <img
                    src="/images/owner.jpeg"
                    alt="Dr. Sudhakarrao Jadhavar"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'data:image/owener.jpeg;'; }}
                  />
                </div>

                <h3 className="text-2xl font-bold">Prin. Dr. Sudhakarrao Jadhavar</h3>
                <p className="text-primary font-semibold">President</p>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  M.Com, M.A., L.L.M., M.P.M., D.T.L., D.L.L.&L.W., G.D.C.&A., Ph.D.
                </p>

                <div className="mt-6 text-left text-gray-700 space-y-3">
                  <p>• Member – Management Council, Savitribai Phule Pune University</p>
                  <p>• Former Dean – Commerce Department, SPPU</p>
                  <p>• General Secretary – Principals Forum, SPPU</p>
                  <p>• Member – Maharashtra Nursing Council</p>
                </div>

                <p className="mt-6 text-gray-700 leading-relaxed text-justify">
                  “Education for strength, wisdom and intellect” — with this vision,
                  Jadhavar International School has emerged as a knowledge hub
                  providing value-based education that nurtures disciplined, confident
                  and capable young minds. Situated in a rural region, the school
                  empowers students to become nation builders through strong academics,
                  character development and opportunities for holistic growth.
                </p>

                {/* PDF Links */}
                <div className="mt-6 flex gap-4">
                  <a
                    href="/pdf/Krantiveer Marathi.pdf"
                    target="_blank"
                    className="bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-primaryDark transition"
                  >
                    Autobiography (मराठी)
                  </a>
                  <a
                    href="/pdf/Krantiveer Hindi.pdf"
                    target="_blank"
                    className="bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-primaryDark transition"
                  >
                    Autobiography (हिंदी)
                  </a>
                  <a
                    href="/pdf/Krantiveer English.pdf"
                    target="_blank"
                    className="bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-primaryDark transition"
                  >
                    Autobiography (English)
                  </a>
                </div>

                <div className="mt-3">
                  <a
                    href="/pdf/Yashache Shilpka Book.pdf"
                    target="_blank"
                    className="underline text-primary font-semibold cursor-pointer"
                  >
                    Books: यशाचे शिल्पकार : संघर्षातून शिखराकडे
                  </a>
                </div>
              </div>
            </div>

            {/* SECRETARY – ADV. SHARDUL S. JADHAVAR */}
            <div className="bg-white text-black p-8 rounded-2xl shadow-xl">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg mb-4">
                  <img
                    src="/images/Shardul_jadhavar.jpeg"
                    alt="Adv. Shardul Sudhakarrao Jadhavar"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'data:image/Shardul_jadhavar.jpeg;'; }}
                  />
                </div>

                <h3 className="text-2xl font-bold">Adv. Shardul Sudhakarrao Jadhavar</h3>
                <p className="text-primary font-semibold">Secretary</p>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  M.B.A., P.G.D.H.R.M., B.Com., D.H.R.&L., D.C.L., D.CP.L., APCL, DIPL,
                  CMED, D.LL&L.W., L.L.M.
                </p>

                <p className="mt-6 text-gray-700 leading-relaxed text-justify">
                  Education today is rapidly transforming, making it challenging for
                  students to choose the right path. Our aim is to develop not just
                  knowledgeable individuals, but responsible, confident and
                  compassionate citizens.
                  <br /><br />
                  At Jadhavar Institutes, we follow a student-centric approach with
                  dedicated faculty guiding, mentoring and shaping students into capable
                  professionals.
                  We support students through fee concessions, counseling, workshops,
                  mental health awareness, NSS activities, placements, and career guidance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Accordion Sections */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">


          {/* Mission & Credo */}
          <AccordionSection
            id="mission-credo"
            title="Mission & Credo"
            isOpen={openSections.missionCredo}
            onToggle={() => toggleSection('missionCredo')}
          >
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">Our Mission</h4>
                <p className="text-gray-700 leading-relaxed">
                  To provide a holistic education that nurtures intellectual curiosity, emotional intelligence, and ethical values. We strive to create an environment where every student can discover their potential and develop into confident, responsible global citizens.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">Our Vision</h4>
                <p className="text-gray-700 leading-relaxed">
                  To be a leading educational institution that sets benchmarks in academic excellence, character building, and innovation. We envision our students as leaders who will make meaningful contributions to society while staying rooted in their cultural values.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">Mantras For Students</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Be A Learner All Your Life:</strong> Akshara's motto is 'school that instills continuous learning'. We believe in making our students global citizens who would continue to learn and grow. "The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn."</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Give Back To The Society:</strong> Contributing to the community and making a positive impact.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Learn To Respond And Not React:</strong> Developing emotional intelligence and thoughtful decision-making.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Extend Gratitude:</strong> Appreciating what we have and expressing thankfulness.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Follow Your Passion:</strong> Pursuing interests and dreams with dedication.</span>
                  </li>
                </ul>
                <p className="mt-4 text-gray-700 italic">
                  "Success is not final, Failure is not fatal. It is the courage to continue that counts."
                </p>
              </div>
            </div>
          </AccordionSection>

          {/* Management */}
          <AccordionSection
            id="management"
            title="Management"
            isOpen={openSections.management}
            onToggle={() => toggleSection('management')}
          >
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Leadership Team</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Jadhavar International School is governed by an experienced and visionary management team committed to providing world-class education. Our leadership comprises educationists, administrators, and professionals who bring together diverse expertise to create an enriching learning environment.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Management Philosophy</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our management believes in transparent governance, continuous improvement, and student-centric policies. We maintain high standards of education, infrastructure, and student welfare while fostering innovation and excellence in all our endeavors.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Key Responsibilities</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Strategic planning and policy formulation for academic excellence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Infrastructure development and maintenance of state-of-the-art facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Recruitment and development of qualified teaching and administrative staff</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Curriculum design and implementation aligned with national and international standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Student welfare and holistic development programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Parent engagement and community outreach initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Financial management and resource allocation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Compliance with educational regulations and accreditation standards</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Commitment to Excellence</h4>
                <p className="text-gray-700 leading-relaxed">
                  The management is dedicated to creating an environment where every student can thrive academically, socially, and emotionally. We continuously work towards improving our facilities, programs, and teaching methodologies to meet the evolving needs of our students and prepare them for success in an ever-changing world.
                </p>
              </div>
            </div>
          </AccordionSection>

          {/* Chairperson */}


          {/* Awards */}
          <AccordionSection
            id="awards"
            title="Awards"
            isOpen={openSections.awards}
            onToggle={() => toggleSection('awards')}
          >
            <div className="space-y-6">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Jadhavar International School has been consistently recognized for excellence in education, innovation, and student development. We are proud of the numerous awards and accolades we have received over the years, which reflect our commitment to providing world-class education.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">National & Regional Awards</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                    <h5 className="font-semibold text-primary mb-2 text-lg">Excellence in Education</h5>
                    <p className="text-sm text-gray-600 mb-2">Recognized for outstanding academic performance and innovative teaching methods.</p>
                    <p className="text-xs text-gray-500 italic">Awarded for consistent high results in board examinations and comprehensive curriculum implementation.</p>
                  </div>
                  <div className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                    <h5 className="font-semibold text-primary mb-2 text-lg">Best Infrastructure</h5>
                    <p className="text-sm text-gray-600 mb-2">Awarded for state-of-the-art facilities and modern learning environment.</p>
                    <p className="text-xs text-gray-500 italic">Recognized for world-class campus facilities, laboratories, and smart classrooms.</p>
                  </div>
                  <div className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                    <h5 className="font-semibold text-primary mb-2 text-lg">Student Development</h5>
                    <p className="text-sm text-gray-600 mb-2">Recognized for holistic development programs and student achievements.</p>
                    <p className="text-xs text-gray-500 italic">Awarded for comprehensive programs focusing on academic, sports, and cultural excellence.</p>
                  </div>
                  <div className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                    <h5 className="font-semibold text-primary mb-2 text-lg">Innovation in Teaching</h5>
                    <p className="text-sm text-gray-600 mb-2">Awarded for innovative teaching methodologies and curriculum design.</p>
                    <p className="text-xs text-gray-500 italic">Recognized for integrating technology and modern pedagogical approaches in education.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Special Recognition</h4>
                <div className="space-y-3">
                  <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                    <h5 className="font-semibold text-primary mb-1">Green School Award</h5>
                    <p className="text-sm text-gray-700">Recognized for environmental initiatives and sustainable practices on campus.</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                    <h5 className="font-semibold text-primary mb-1">Sports Excellence Award</h5>
                    <p className="text-sm text-gray-700">Awarded for outstanding performance in inter-school and state-level sports competitions.</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                    <h5 className="font-semibold text-primary mb-1">Cultural Heritage Award</h5>
                    <p className="text-sm text-gray-700">Recognized for promoting cultural values and heritage through various programs and activities.</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                    <h5 className="font-semibold text-primary mb-1">Community Service Award</h5>
                    <p className="text-sm text-gray-700">Awarded for active participation in community development and social service initiatives.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Faculty & Staff Recognition</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Our dedicated faculty members have also been honored with various awards for their outstanding contribution to education, including:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Best Teacher Awards at state and national levels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Innovation in Teaching Methodology Awards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Excellence in Student Mentoring Recognition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Research and Publication Awards</span>
                  </li>
                </ul>
              </div>
            </div>
          </AccordionSection>

          {/* Achievements */}
          <AccordionSection
            id="achievements"
            title="Achievements"
            isOpen={openSections.achievements}
            onToggle={() => toggleSection('achievements')}
          >
            <div className="space-y-6">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Jadhavar International School takes pride in the remarkable achievements of our students, faculty, and the institution as a whole. Our consistent success across various fields reflects our commitment to holistic education and excellence.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Academic Achievements</h4>
                <div className="space-y-3 mb-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">Board Examination Results</h5>
                    <p className="text-sm text-gray-700 mb-2">Consistent high performance in CBSE board examinations with:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                      <li>95%+ pass rate consistently over the years</li>
                      <li>Multiple students securing 90%+ aggregate marks</li>
                      <li>Subject toppers in Mathematics, Science, and Commerce streams</li>
                      <li>Outstanding performance in board examinations</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">Competitive Examinations</h5>
                    <p className="text-sm text-gray-700 mb-2">Students excelling in various competitive exams:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                      <li>JEE (Joint Entrance Examination) - Engineering admissions</li>
                      <li>NEET (National Eligibility cum Entrance Test) - Medical admissions</li>
                      <li>Olympiads in Mathematics, Science, and English</li>
                      <li>Scholarship exams and talent search competitions</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">University Admissions</h5>
                    <p className="text-sm text-gray-700">Our alumni have secured admissions in premier institutions including IITs, NITs, medical colleges, and leading universities in India and abroad.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Sports Achievements</h4>
                <div className="space-y-3 mb-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">Inter-School Competitions</h5>
                    <p className="text-sm text-gray-700 mb-2">Outstanding performance in various sports:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                      <li>Cricket - District and State level championships</li>
                      <li>Football - Inter-school tournament winners</li>
                      <li>Basketball - Regional championship participants</li>
                      <li>Athletics - Multiple gold, silver, and bronze medals</li>
                      <li>Swimming - State level competition qualifiers</li>
                      <li>Table Tennis, Badminton, and Chess tournaments</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">Individual Achievements</h5>
                    <p className="text-sm text-gray-700">Students have represented the school at district, state, and national levels in various sports disciplines, bringing laurels to the institution.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Cultural & Artistic Achievements</h4>
                <div className="space-y-3 mb-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">Cultural Festivals</h5>
                    <p className="text-sm text-gray-700 mb-2">Outstanding performances in:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                      <li>Annual day celebrations and cultural events</li>
                      <li>Inter-school dance and music competitions</li>
                      <li>Drama and theater festivals</li>
                      <li>Art exhibitions and creative competitions</li>
                      <li>Debate and elocution contests</li>
                      <li>Quiz competitions and talent shows</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">Recognition in Arts</h5>
                    <p className="text-sm text-gray-700">Students have won accolades in painting, drawing, sculpture, and other forms of visual arts at various competitions and exhibitions.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Community Service & Leadership</h4>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">Social Initiatives</h5>
                    <p className="text-sm text-gray-700 mb-2">Active participation in:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                      <li>Environmental conservation programs and tree plantation drives</li>
                      <li>Community cleanliness and awareness campaigns</li>
                      <li>Support for underprivileged children and elderly care</li>
                      <li>Blood donation camps and health awareness programs</li>
                      <li>Disaster relief and fundraising activities</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">Student Leadership</h5>
                    <p className="text-sm text-gray-700">Our student council and prefects have been recognized for their leadership qualities and contributions to school activities and community service.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Institutional Achievements</h4>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>NABET Accreditation:</strong> Recognized for quality education and training standards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Board Affiliation:</strong> Affiliated with a recognized educational board</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Green School Certification:</strong> Recognized for environmental initiatives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Safe School Recognition:</strong> Awarded for safety and security measures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Digital School Status:</strong> Recognized for technology integration in education</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AccordionSection>

          {/* Testimonials */}
          <AccordionSection
            id="testimonials"
            title="Testimonials"
            isOpen={openSections.testimonials}
            onToggle={() => toggleSection('testimonials')}
          >
            <div className="space-y-6">
              <div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Hear from our students, parents, and alumni about their experiences at Jadhavar International School. Their words reflect our commitment to excellence and the positive impact we strive to make in every student's life.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Parent Testimonials</h4>
                <div className="space-y-4">
                  <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
                    <p className="text-gray-700 italic mb-4">
                      "Jadhavar International School has provided my child with an excellent education and a nurturing environment. The teachers are dedicated, patient, and truly care about each student's development. The facilities are outstanding, and the school's focus on holistic education is evident in my child's overall growth."
                    </p>
                    <p className="text-sm font-semibold text-primary">- Mrs. Priya Sharma, Parent of a Student</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
                    <p className="text-gray-700 italic mb-4">
                      "The holistic approach to education here has helped my child develop not just academically, but also as a confident and responsible individual. The school's emphasis on values, character building, and extracurricular activities has made a significant difference in my child's personality and outlook towards life."
                    </p>
                    <p className="text-sm font-semibold text-primary">- Mr. Rajesh Kumar, Parent of a Student</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
                    <p className="text-gray-700 italic mb-4">
                      "As a parent, I appreciate the school's commitment to maintaining high academic standards while also focusing on the overall development of students. The regular communication with teachers and the school's transparent approach to education gives me confidence that my child is in good hands."
                    </p>
                    <p className="text-sm font-semibold text-primary">- Mrs. Anjali Patel, Parent of a Student</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-primary">
                    <p className="text-gray-700 italic mb-4">
                      "The infrastructure and facilities at Jadhavar are world-class. From well-equipped laboratories to modern classrooms and sports facilities, everything is designed to provide the best learning experience. My child enjoys going to school every day, which speaks volumes about the positive environment."
                    </p>
                    <p className="text-sm font-semibold text-primary">- Mr. Sameer Desai, Parent of a Student</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Student Testimonials</h4>
                <div className="space-y-4">
                  <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700 italic mb-4">
                      "Jadhavar International School has been my second home for the past five years. The teachers are not just educators but mentors who guide us through every step of our journey. The school's emphasis on both academics and extracurricular activities has helped me discover my passion for sports and music."
                    </p>
                    <p className="text-sm font-semibold text-primary">- Arjun Mehta, Student</p>
                  </div>
                  <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700 italic mb-4">
                      "What I love most about Jadhavar is the supportive environment. Whether it's academics, sports, or cultural activities, the school encourages us to explore and excel in everything we do. The interactive teaching methods and practical learning approaches make studying enjoyable and effective."
                    </p>
                    <p className="text-sm font-semibold text-primary">- Sneha Reddy, Student</p>
                  </div>
                  <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700 italic mb-4">
                      "The school's focus on character building and values has shaped me into a better person. I've learned not just from textbooks but from real-life experiences, community service activities, and interactions with peers and teachers. Jadhavar has prepared me well for the challenges ahead."
                    </p>
                    <p className="text-sm font-semibold text-primary">- Vikram Singh, Student</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Alumni Testimonials</h4>
                <div className="space-y-4">
                  <div className="p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <p className="text-gray-700 italic mb-4">
                      "I am grateful for the opportunities and support I received at Jadhavar. The school prepared me well for my future endeavors, and the values I learned here continue to guide me in my personal and professional life. The strong foundation in academics, combined with leadership opportunities, helped me succeed in college and beyond."
                    </p>
                    <p className="text-sm font-semibold text-primary">- Dr. Aishwarya Nair, Alumni (Currently: Medical Professional)</p>
                  </div>
                  <div className="p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <p className="text-gray-700 italic mb-4">
                      "Jadhavar International School instilled in me a love for learning and the confidence to pursue my dreams. The teachers were always supportive, and the school's emphasis on holistic development helped me become a well-rounded individual. The skills I acquired here, both academic and life skills, have been invaluable in my career."
                    </p>
                    <p className="text-sm font-semibold text-primary">- Rohit Agarwal, Alumni (Currently: Software Engineer)</p>
                  </div>
                  <div className="p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <p className="text-gray-700 italic mb-4">
                      "My years at Jadhavar were transformative. The school not only provided excellent academic education but also nurtured my creativity and critical thinking skills. The exposure to various activities, competitions, and community service programs broadened my perspective and helped me develop leadership qualities that I use in my professional life today."
                    </p>
                    <p className="text-sm font-semibold text-primary">- Kavya Menon, Alumni (Currently: Business Consultant)</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Teacher Testimonials</h4>
                <div className="p-6 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <p className="text-gray-700 italic mb-4">
                    "Teaching at Jadhavar International School is a rewarding experience. The school provides excellent support for teachers, encourages innovation in teaching methods, and values professional development. The students are enthusiastic learners, and the positive school culture makes it a joy to come to work every day. The management's commitment to educational excellence and student welfare creates an ideal environment for both teaching and learning."
                  </p>
                  <p className="text-sm font-semibold text-primary">- Mrs. Sunita Rao, Senior Mathematics Teacher</p>
                </div>
              </div>
            </div>
          </AccordionSection>

          {/* NABET Accreditation */}
          <AccordionSection
            id="nabet"
            title="NABET Accreditation"
            isOpen={openSections.nabet}
            onToggle={() => toggleSection('nabet')}
          >
            <div className="space-y-6">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Jadhavar International School is proud to be accredited by NABET (National Accreditation Board for Education and Training), which is a constituent Board of the Quality Council of India (QCI). This prestigious accreditation reflects our commitment to maintaining the highest standards of quality in education, infrastructure, and overall management.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">What is NABET?</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  NABET is a premier accreditation body under the Quality Council of India (QCI), established to ensure quality assurance in education and training institutions across India. NABET accreditation is a voluntary process that recognizes institutions that meet or exceed established quality standards in various aspects of education delivery.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Accreditation Process</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our school underwent a rigorous accreditation process that involved:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Comprehensive self-assessment and documentation of our educational practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>On-site evaluation by NABET assessors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Review of curriculum, teaching methodologies, and student outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Assessment of infrastructure, facilities, and resources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Evaluation of administrative processes and quality management systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Verification of compliance with educational regulations and standards</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Benefits of NABET Accreditation</h4>
                <div className="p-5 bg-primary/10 rounded-lg mb-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Quality Assurance:</strong> Ensures consistent delivery of high-quality education and training programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Recognition of Excellence:</strong> Acknowledges our commitment to excellence in educational practices and institutional management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Continuous Improvement:</strong> Provides framework for ongoing enhancement of teaching, learning, and administrative processes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Enhanced Credibility:</strong> Builds trust and confidence among students, parents, and the educational community</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Benchmarking:</strong> Allows comparison with other accredited institutions and best practices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Student Benefits:</strong> Students receive education from an accredited institution, which is recognized for quality and standards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Professional Development:</strong> Encourages faculty and staff to maintain high professional standards</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Areas Covered by Accreditation</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-primary mb-2">Academic Excellence</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                      <li>Curriculum design and implementation</li>
                      <li>Teaching methodologies and pedagogy</li>
                      <li>Assessment and evaluation systems</li>
                      <li>Student learning outcomes</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-primary mb-2">Infrastructure & Facilities</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                      <li>Classrooms and learning spaces</li>
                      <li>Laboratories and specialized facilities</li>
                      <li>Library and resource centers</li>
                      <li>Sports and recreational facilities</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-primary mb-2">Faculty & Staff</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                      <li>Qualifications and expertise</li>
                      <li>Professional development programs</li>
                      <li>Teaching effectiveness</li>
                      <li>Student-teacher interactions</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-primary mb-2">Administrative Systems</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                      <li>Governance and management</li>
                      <li>Quality management systems</li>
                      <li>Student support services</li>
                      <li>Financial management and transparency</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Our Commitment</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  NABET accreditation is not just a one-time achievement but an ongoing commitment to excellence. We continuously work towards:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Maintaining and improving our educational standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Regular review and enhancement of our curriculum and teaching methods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Upgrading infrastructure and facilities to meet evolving needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Investing in faculty development and training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Ensuring compliance with all educational regulations and standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Seeking feedback and implementing improvements based on assessments</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h5 className="font-semibold text-primary mb-2">Accreditation Status</h5>
                <p className="text-gray-700 text-sm">
                  Jadhavar International School is proudly accredited by NABET, demonstrating our commitment to providing quality education that meets national standards. This accreditation is renewed periodically through reassessment to ensure continued compliance with quality standards.
                </p>
              </div>
            </div>
          </AccordionSection>

          {/* School Tour */}
          <AccordionSection
            id="school-tour"
            title="School Tour"
            isOpen={openSections.schoolTour}
            onToggle={() => toggleSection('schoolTour')}
          >
            <div className="space-y-6">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We welcome prospective students and parents to visit our campus and experience the vibrant learning environment at Jadhavar International School. A campus tour is the best way to see our world-class facilities, meet our faculty, and understand what makes our school unique.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Virtual Tour</h4>
                <div className="p-5 bg-gray-50 rounded-lg mb-4">
                  <p className="text-gray-700 mb-3">
                    Explore our campus facilities from the comfort of your home through our comprehensive virtual tour. Our virtual tour includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-4">
                    <li>360-degree views of classrooms, laboratories, and facilities</li>
                    <li>Interactive maps of the campus</li>
                    <li>Video walkthroughs of key areas</li>
                    <li>Detailed information about each facility</li>
                    <li>Virtual meetings with faculty and staff</li>
                    <li>Q&A sessions with current students and parents</li>
                  </ul>
                  <p className="text-gray-700 text-sm mt-3 italic">
                    To schedule a virtual tour, please contact our admissions office or fill out the inquiry form on our website.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Physical Campus Tour</h4>
                <div className="p-5 bg-gray-50 rounded-lg mb-4">
                  <p className="text-gray-700 mb-3">
                    Schedule a visit to our campus to see our facilities in person and meet with our faculty and staff. Physical tours are available on weekdays and select weekends by appointment.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Tour Schedule</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                        <li><strong>Weekdays:</strong> Monday to Friday, 9:00 AM to 4:00 PM</li>
                        <li><strong>Weekends:</strong> Selected Saturdays, 10:00 AM to 2:00 PM</li>
                        <li><strong>Duration:</strong> Approximately 1-2 hours</li>
                        <li><strong>Group Size:</strong> Individual families or small groups</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">What's Included</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                        <li>Guided tour of the campus by our admissions team</li>
                        <li>Visit to classrooms, laboratories, and specialized facilities</li>
                        <li>Meeting with faculty members and department heads</li>
                        <li>Information session about curriculum and programs</li>
                        <li>Q&A session with school administration</li>
                        <li>Overview of admission process and requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Campus Facilities You'll See</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-semibold text-primary mb-2">Academic Facilities</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                      <li>Modern classrooms with smart boards and digital learning tools</li>
                      <li>Well-equipped science laboratories (Physics, Chemistry, Biology)</li>
                      <li>Computer laboratories with latest technology</li>
                      <li>Mathematics and language labs</li>
                      <li>Extensive library with digital resources and reading spaces</li>
                      <li>Audio-visual rooms and multimedia centers</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h5 className="font-semibold text-primary mb-2">Sports & Recreation</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                      <li>Large playground for outdoor sports</li>
                      <li>Indoor sports facilities (badminton, table tennis, chess)</li>
                      <li>Swimming pool (if available)</li>
                      <li>Basketball and volleyball courts</li>
                      <li>Cricket nets and practice areas</li>
                      <li>Sports equipment and gear storage</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h5 className="font-semibold text-primary mb-2">Arts & Culture</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                      <li>Art and craft rooms with supplies</li>
                      <li>Music room with instruments</li>
                      <li>Dance studio and practice areas</li>
                      <li>Drama and theater facilities</li>
                      <li>Exhibition spaces for student work</li>
                      <li>Cultural activity centers</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h5 className="font-semibold text-primary mb-2">Support Facilities</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                      <li>Cafeteria and dining facilities</li>
                      <li>Medical room with first aid and nurse</li>
                      <li>Counseling center for student support</li>
                      <li>Administrative offices</li>
                      <li>Auditorium and assembly hall</li>
                      <li>Parking facilities for staff and visitors</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Safety & Security</h4>
                <div className="p-5 bg-red-50 rounded-lg">
                  <p className="text-gray-700 mb-3 text-sm">
                    During the tour, you'll see our comprehensive safety and security measures:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                    <li>24/7 security personnel and surveillance systems</li>
                    <li>Access control systems and visitor management</li>
                    <li>Fire safety equipment and emergency protocols</li>
                    <li>Safe transportation facilities</li>
                    <li>Health and hygiene measures</li>
                    <li>Student safety policies and procedures</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">How to Schedule a Tour</h4>
                <div className="p-5 bg-primary/10 rounded-lg">
                  <p className="text-gray-700 mb-3">
                    To schedule a campus tour, you can:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm ml-4">
                    <li><strong>Call us:</strong> Contact our admissions office at the phone number provided on the contact page</li>
                    <li><strong>Email us:</strong> Send an email to our admissions team with your preferred date and time</li>
                    <li><strong>Online Form:</strong> Fill out the campus tour request form on our website</li>
                    <li><strong>Walk-in:</strong> Visit our campus during office hours (prior appointment recommended)</li>
                  </ul>
                  <p className="text-gray-700 text-sm mt-4 italic">
                    We recommend scheduling your tour at least 2-3 days in advance to ensure availability and to allow us to prepare a personalized experience for you.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Special Events & Open Houses</h4>
                <div className="p-5 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 mb-3 text-sm">
                    In addition to regular tours, we also organize special events where you can experience the school in action:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                    <li><strong>Open House Days:</strong> Special days when the entire school community welcomes visitors</li>
                    <li><strong>Annual Day & Cultural Events:</strong> Experience our students' talents and achievements</li>
                    <li><strong>Science & Art Exhibitions:</strong> View student projects and creative works</li>
                    <li><strong>Sports Day:</strong> Witness our sports facilities and student participation</li>
                    <li><strong>Parent-Teacher Meetings:</strong> Understand our communication and engagement approach</li>
                  </ul>
                </div>
              </div>
            </div>
          </AccordionSection>
        </div>
      </section>
{/* 
  
   

      {/* Photo Gallery Section */}
       
    </div>
  )
}

export default About