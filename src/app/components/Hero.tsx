'use client'

import { motion } from 'framer-motion'
import { Heart, Calendar, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import LanguageSelector from './LanguageSelector'

export default function Hero() {
  const { t, loading } = useTranslation('hero')
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const weddingDate = new Date('2024-06-15T16:00:00')
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = weddingDate.getTime() - now
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      
      setTimeLeft({ days, hours, minutes, seconds })
      
      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])

  const FloatingHearts = () => {
    return (
      <div className="floating-hearts">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="heart"
            size={20}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    )
  }

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-gold-100">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-rose-500"></div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Language Selector */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSelector />
      </div>

      {/* Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-gold-100"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>

      <FloatingHearts />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <Heart className="w-16 h-16 mx-auto text-rose-500 animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
          >
            {t('names', 'Carlos & Elizabeth')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-gray-700 mb-8 font-light"
          >
            {t('subtitle', 'Nos casamos y queremos celebrarlo contigo')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8"
          >
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar className="w-5 h-5 text-rose-500" />
              <span className="font-medium">{t('date', '15 de Junio, 2024')}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-5 h-5 text-rose-500" />
              <span className="font-medium">{t('location', 'Jardín Botánico, Madrid')}</span>
            </div>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="grid grid-cols-4 gap-4 max-w-md mx-auto"
          >
            {[
              { label: t('countdown.days', 'Días'), value: timeLeft.days },
              { label: t('countdown.hours', 'Horas'), value: timeLeft.hours },
              { label: t('countdown.minutes', 'Min'), value: timeLeft.minutes },
              { label: t('countdown.seconds', 'Seg'), value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={item.label} className="text-center">
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-3 mb-2">
                  <span className="text-2xl md:text-3xl font-bold text-gray-800">
                    {item.value.toString().padStart(2, '0')}
                  </span>
                </div>
                <span className="text-sm text-gray-600 font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-8"
        >
          <button
            onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {t('buttons.learnMore', 'Conoce Nuestra Historia')}
          </button>
        </motion.div>
      </div>
    </section>
  )
}