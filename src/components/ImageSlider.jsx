import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // 6 images for the slider
  const images = [
    {
      src: '/images/slider/jadhavar_infra.png',
      alt: 'Jadhavar International School - Campus View',
      title: 'Modern Campus Facilities',
      description: 'State-of-the-art infrastructure for holistic learning'
    },
    {
      src: '/images/slider/learning.jpeg',
      alt: 'Jadhavar International School - Students Learning',
      title: 'Interactive Learning',
      description: 'Engaging classrooms that inspire curiosity'
    },
    {
      src: '/images/slider/sport.jpeg',
      alt: 'Jadhavar International School - Sports Activities',
      title: 'Sports & Activities',
      description: 'Nurturing talent beyond academics'
    },
    {
      src: '/facilities/laboratory_lab.jpg',
      alt: 'Jadhavar International School - Science Lab',
      title: 'Advanced Laboratories',
      description: 'Hands-on learning with modern equipment'
    },
    {
      src: '/images/slider/laboratory.jpeg',
      alt: 'Jadhavar International School - Library',
      title: 'Knowledge Hub',
      description: 'Extensive library resources for research'
    },
    {
      src: '/images/slider/culture.jpeg',
      alt: 'Jadhavar International School - Cultural Events',
      title: 'Cultural Excellence',
      description: 'Celebrating diversity and creativity'
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${images[currentIndex].src})`,
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="container-custom text-center text-white px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {images[currentIndex].title}
                </h2>
                <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md">
                  {images[currentIndex].description}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6 md:w-8 md:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6 md:w-8 md:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${index === currentIndex
              ? 'w-10 h-3 bg-white'
              : 'w-3 h-3 bg-white/50 hover:bg-white/75'
              }`}
          >
            {/* Invisible element so button has child (fixes a11y warning) */}
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>


      {/* Progress Bar */}
      {isAutoPlaying && (
        <motion.div
          key={currentIndex}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 4, ease: 'linear' }}
          className="absolute bottom-0 left-0 h-1 bg-primary z-20"
        />
      )}
    </section>
  )
}

export default ImageSlider

