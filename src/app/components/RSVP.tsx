'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Send, CheckCircle, Heart, Calendar } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'

export default function RSVP() {
  const { t, loading } = useTranslation('wedding')
  const { t: tCommon } = useTranslation('common')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    attendance: '',
    dietary: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="animate-pulse text-center mb-16">
            <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </section>
    )
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-12 shadow-xl"
          >
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {tCommon('success.title', '¡Gracias por confirmar!')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {tCommon('success.message', 'Estamos muy emocionados de celebrar este día especial contigo. Te enviaremos más detalles pronto.')}
            </p>
            <Heart className="w-12 h-12 text-rose-500 mx-auto animate-pulse" />
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('rsvp.title', 'Confirma tu Asistencia')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            {t('rsvp.subtitle', 'Tu presencia es el mejor regalo. Por favor, confirma tu asistencia antes del 1 de junio.')}
          </p>
          <div className="flex items-center justify-center gap-2 text-rose-600 font-medium">
            <Calendar className="w-5 h-5" />
            <span>{t('rsvp.deadline', 'Fecha límite: 1 de Junio, 2024')}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {tCommon('form.name', 'Nombre Completo')} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {tCommon('form.email', 'Email')} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {tCommon('form.phone', 'Teléfono')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                  placeholder="+34 123 456 789"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {tCommon('form.guests', 'Número de Invitados')} *
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                {tCommon('form.attendance', '¿Podrás acompañarnos?')} *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    formData.attendance === 'yes'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-300 hover:border-green-300'
                  }`}>
                    <div className="text-center">
                      <div className="text-2xl mb-2">🎉</div>
                      <div className="font-medium text-gray-800">
                        {tCommon('form.yesAttend', '¡Sí, estaré ahí!')}
                      </div>
                      <div className="text-sm text-gray-600">
                        {tCommon('form.yesDescription', 'No me lo perdería')}
                      </div>
                    </div>
                  </div>
                </label>

                <label className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    formData.attendance === 'no'
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300 hover:border-red-300'
                  }`}>
                    <div className="text-center">
                      <div className="text-2xl mb-2">😢</div>
                      <div className="font-medium text-gray-800">
                        {tCommon('form.noAttend', 'No podré asistir')}
                      </div>
                      <div className="text-sm text-gray-600">
                        {tCommon('form.noDescription', 'Pero estaré en espíritu')}
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {tCommon('form.dietary', 'Restricciones Alimentarias')}
              </label>
              <input
                type="text"
                name="dietary"
                value={formData.dietary}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                placeholder="Vegetariano, sin gluten, alergias..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {tCommon('form.message', 'Mensaje Especial')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Comparte tus buenos deseos..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.email || !formData.attendance}
              className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {tCommon('buttons.confirm', 'Confirmar Asistencia')}
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}