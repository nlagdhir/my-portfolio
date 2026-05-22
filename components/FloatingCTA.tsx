'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { HiCalendar, HiX } from 'react-icons/hi'

export default function FloatingCTA() {
  const [showBookCall, setShowBookCall] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 400) {
        setShowBookCall(true)
      } else {
        setShowBookCall(false)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* WhatsApp Button — always visible */}
      <motion.a
        href="https://wa.me/919510110198?text=Hi%20Nilesh%2C%20I%27d%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/40 hover:bg-green-600 transition-colors"
      >
        <FaWhatsapp size={26} color="white" />
      </motion.a>

      {/* Book a Call button — appears after scrolling */}
      <AnimatePresence>
        {showBookCall && !dismissed && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-6 left-6 z-50 flex items-center gap-2"
          >
            <a
              href="https://calendly.com/nilesh-nlagdhir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 pl-4 pr-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105 transition-all"
            >
              <HiCalendar size={17} />
              Book a Free Call
            </a>
            <button
              onClick={() => setDismissed(true)}
              className="w-7 h-7 rounded-full bg-slate-700 text-white flex items-center justify-center hover:bg-slate-600 transition-colors"
              aria-label="Dismiss"
            >
              <HiX size={13} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
