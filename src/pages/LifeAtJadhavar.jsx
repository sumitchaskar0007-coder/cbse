import { useState } from 'react'
import { motion } from 'framer-motion'

const LifeAtJadhavar = () => {
  const [activeTab, setActiveTab] = useState('cultural')

  const activities = {
    cultural: {
      title: 'Cultural Activities',
      description: 'Celebrating diversity and creativity through various cultural programs and events.',
      items: [
        { name: 'Annual Day Celebration', description: 'Grand celebration showcasing student talents' },
        { name: 'Music & Dance', description: 'Classes in classical and contemporary forms' },
        { name: 'Drama & Theatre', description: 'Theatre workshops and annual plays' },
        { name: 'Art & Craft', description: 'Creative expression through various art forms' },
        { name: 'Debate & Elocution', description: 'Public speaking and debate competitions' },
        { name: 'Festivals', description: 'Celebrating various cultural and religious festivals' },
      ]
    },
    sports: {
      title: 'Sports & Fitness',
      description: 'Promoting physical fitness and sportsmanship through various athletic activities.',
      items: [
        { name: 'Cricket', description: 'Professional coaching and regular matches' },
        { name: 'Football', description: 'Team training and inter-school competitions' },
        { name: 'Basketball', description: 'Court facilities and coaching programs' },
        { name: 'Swimming', description: 'Swimming pool with certified instructors' },
        { name: 'Athletics', description: 'Track and field events' },
        { name: 'Indoor Games', description: 'Chess, table tennis, and more' },
      ]
    },
    boarding: {
      title: 'Boarding & Day School',
      description: 'A home away from home with excellent facilities and care.',
      items: [
        { name: 'Residential Facilities', description: 'Comfortable and secure accommodation' },
        { name: 'Dining Services', description: 'Nutritious and balanced meals' },
        { name: 'Study Halls', description: 'Dedicated spaces for focused learning' },
        { name: 'Recreation Areas', description: 'Common areas for relaxation and socializing' },
        { name: 'Medical Care', description: '24/7 medical support and health services' },
        { name: 'Day School Options', description: 'Flexible day school programs available' },
      ]
    },
    community: {
      title: 'Community Engagement',
      description: 'Building responsible citizens through community service and social awareness.',
      items: [
        { name: 'Social Service', description: 'Community outreach programs' },
        { name: 'Environmental Initiatives', description: 'Eco-clubs and green projects' },
        { name: 'Leadership Programs', description: 'Student council and leadership training' },
        { name: 'Volunteer Work', description: 'Opportunities to serve the community' },
        { name: 'Awareness Campaigns', description: 'Health, safety, and social awareness' },
        { name: 'Inter-school Events', description: 'Collaborations with other institutions' },
      ]
    }
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
            Beyond Academics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            A vibrant campus life that nurtures talents, builds character, and creates lasting memories
          </motion.p>
        </div>
      </section>

      {/* Tabs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(activities).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === key
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {activities[key].title}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">
                {activities[activeTab].title}
              </h2>
              <p className="text-xl text-gray-600">
                {activities[activeTab].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activities[activeTab].items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Student Quotes */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Student Voices</h2>
            <p className="text-xl text-gray-600">Hear from our students about their experiences</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Life at Jadhavar is amazing! The balance between academics and extracurricular activities helps me grow as a complete individual.',
                author: 'Student, Class V'
              },
              {
                quote: 'The sports facilities here are excellent. I\'ve improved my skills significantly and made great friends through team sports.',
                author: 'Student, Class VII'
              },
              {
                quote: 'The cultural events and festivals bring our entire school community together. It\'s a wonderful experience!',
                author: 'Student, Class VIII'
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-gray-700 mb-4 italic">{testimonial.quote}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">A Day at Jadhavar</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                { time: '8:00 AM', activity: 'Morning Assembly & Prayer' },
                { time: '8:30 AM', activity: 'Academic Classes Begin' },
                { time: '11:00 AM', activity: 'Break Time & Snacks' },
                { time: '11:30 AM', activity: 'Continued Academic Sessions' },
                { time: '1:00 PM', activity: 'Lunch Break' },
                { time: '2:00 PM', activity: 'Afternoon Classes' },
                { time: '3:30 PM', activity: 'Extracurricular Activities' },
                { time: '5:00 PM', activity: 'Study Hall / Sports Practice' },
              ].map((schedule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-6 bg-gray-50 p-4 rounded-lg"
                >
                  <div className="w-24 text-primary font-semibold">{schedule.time}</div>
                  <div className="flex-1 text-gray-700">{schedule.activity}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LifeAtJadhavar









