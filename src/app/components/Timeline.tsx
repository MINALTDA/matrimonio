'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Star, Calendar } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'

// Importar el ícono Ring por separado ya que puede no estar disponible
const RingIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
)

export default function Timeline() {
  const { t, loading } = useTranslation('wedding')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const timelineEvents = [
    {
      year: t('timeline.events.meeting.year', '2018'),
      title: t('timeline.events.meeting.title', 'Nos Conocimos'),
      description: t('timeline.events.meeting.description', 'Un encuentro casual en la universidad que cambió nuestras vidas para siempre.'),
      icon: Star,
      color: 'from-blue-400 to-blue-600'
    },
    {
      year: t('timeline.events.firstDate.year', '2020'),
      title: t('timeline.events.firstDate.title', 'Primera Cita'),
      description: t('timeline.events.firstDate.description', 'Una cena romántica que confirmó que éramos el uno para el otro.'),
      icon: Heart,
      color: 'from-pink-400 to-pink-600'
    },
    {
      year: t('timeline.events.proposal.year', '2023'),
      title: t('timeline.events.proposal.title', 'La Propuesta'),
      description: t('timeline.events.proposal.description', 'En la playa al atardecer, Carlos le pidió matrimonio a Elizabeth.'),
      icon: RingIcon,
      color: 'from-gold-400 to-yellow-600'
    },
    {
      year: t('timeline.events.wedding.year', '2024'),
      title: t('timeline.events.wedding.title', 'Nuestra Boda'),
      description: t('timeline.events.wedding.description', 'El día más especial de nuestras vidas, que queremos compartir contigo.'),
      icon: Calendar,
      color: 'from-rose-400 to-rose-600'
    }
  ]

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('timeline.title', 'Nuestra Historia de Amor')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('timeline.subtitle', 'Cada momento nos ha llevado hasta aquí, y ahora queremos escribir el siguiente capítulo contigo a nuestro lado.')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-200 to-gold-200 rounded-full hidden md:block" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
                >
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} mb-4 md:mb-0`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">{event.title}</h3>
                          <span className="text-lg font-medium text-gray-500">{event.year}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative z-10 w-6 h-6 bg-white border-4 border-rose-300 rounded-full hidden md:block" />

                  <div className="w-full md:w-5/12" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}